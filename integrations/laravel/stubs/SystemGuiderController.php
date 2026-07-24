<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;

class SystemGuiderController extends Controller
{
    private function guidesRoot(): string
    {
        return public_path('guides');
    }

    private function safeRelativePath(string $path): string
    {
        $normalized = str_replace('\\', '/', trim($path));
        $normalized = ltrim($normalized, '/');
        if($normalized === '' || str_contains($normalized, '..'))
        {
            abort(400, 'Invalid guide path');
        }

        return $normalized;
    }

    private function readIndex(): array
    {
        $index_path = $this->guidesRoot().'/index.json';
        if(!File::exists($index_path))
        {
            File::ensureDirectoryExists($this->guidesRoot());
            File::put($index_path, json_encode(['version' => 1, 'guides' => []], JSON_PRETTY_PRINT)."\n");
        }

        $data = json_decode(File::get($index_path), true);

        return is_array($data)
            ? ['version' => (int) ($data['version'] ?? 1), 'guides' => is_array($data['guides'] ?? null) ? $data['guides'] : []]
            : ['version' => 1, 'guides' => []];
    }

    private function writeIndex(array $index): void
    {
        File::ensureDirectoryExists($this->guidesRoot());
        File::put(
            $this->guidesRoot().'/index.json',
            json_encode(['version' => 1, 'guides' => array_values($index['guides'] ?? [])], JSON_PRETTY_PRINT)."\n"
        );
    }

    private function settingsPath(): string
    {
        return $this->guidesRoot().'/settings.json';
    }

    private function readSettings(): array
    {
        $path = $this->settingsPath();
        if(!File::exists($path))
        {
            return [];
        }

        $data = json_decode(File::get($path), true);

        return is_array($data) ? $data : [];
    }

    private function normalizeIdList($value): array
    {
        if(is_array($value))
        {
            $parts = $value;
        }
        else
        {
            $parts = preg_split('/[\s,;]+/', (string) $value) ?: [];
        }

        return array_values(array_unique(array_filter(array_map(function($id)
        {
            return trim((string) $id);
        }, $parts), fn($id) => $id !== '')));
    }

    private function normalizeHiddenUrlList($value): array
    {
        if(is_array($value))
        {
            $parts = $value;
        }
        else
        {
            $parts = preg_split('/[\n,;]+/', (string) $value) ?: [];
        }

        $urls = [];
        foreach($parts as $part)
        {
            $path = trim((string) $part);
            if($path === '')
            {
                continue;
            }
            if(preg_match('#^https?://#i', $path))
            {
                $parsed = parse_url($path, PHP_URL_PATH);
                $path = is_string($parsed) ? $parsed : '/';
            }
            $path = strtok($path, '?#') ?: '/';
            if($path[0] !== '/')
            {
                $path = '/'.$path;
            }
            if(strlen($path) > 1)
            {
                $path = rtrim($path, '/');
            }
            $urls[] = strtolower($path);
        }

        return array_values(array_unique(array_filter($urls)));
    }

    private function buildSettingsPayload(array $settings, ?array $existing = null): array
    {
        $base = is_array($existing) ? $existing : [];
        $pin_raw = $settings['bypassPin'] ?? $base['bypassPin'] ?? '123456';
        $pin = preg_replace('/\D+/', '', (string) $pin_raw) ?? '';
        $pin = substr($pin, 0, 12);
        $theme = strtolower((string) ($settings['theme'] ?? $base['theme'] ?? 'dark')) === 'light' ? 'light' : 'dark';

        $payload = [
            'version' => 1,
            'updatedAt' => now()->toIso8601String(),
            'resetBeforePlay' => ($settings['resetBeforePlay'] ?? $base['resetBeforePlay'] ?? 'none') === 'reload' ? 'reload' : 'none',
            'reloadOnNavigate' => (bool) ($settings['reloadOnNavigate'] ?? $base['reloadOnNavigate'] ?? false),
            'resetBeforePlayDelay' => max(0, (int) ($settings['resetBeforePlayDelay'] ?? $base['resetBeforePlayDelay'] ?? 450)),
            'theme' => $theme,
            'bypassPin' => $pin,
            'showAccountId' => (bool) ($settings['showAccountId'] ?? $base['showAccountId'] ?? false),
            'editorAccountIds' => $this->normalizeIdList(
                $settings['editorAccountIds'] ?? $settings['guiderAccounts'] ?? $base['editorAccountIds'] ?? []
            ),
            'hiddenUrls' => $this->normalizeHiddenUrlList(
                $settings['hiddenUrls'] ?? $settings['hiddenRoutes'] ?? $base['hiddenUrls'] ?? ['/login', '/']
            ),
            'launcher' => is_array($settings['launcher'] ?? null)
                ? $settings['launcher']
                : (is_array($base['launcher'] ?? null)
                    ? $base['launcher']
                    : ['size' => 80, 'position' => 'bottom-right', 'animations' => true]),
        ];

        if(isset($settings['ui']) && is_array($settings['ui']))
        {
            $payload['ui'] = $settings['ui'];
        }
        elseif(isset($base['ui']) && is_array($base['ui']))
        {
            $payload['ui'] = $base['ui'];
        }

        return $payload;
    }

    private function currentAccountId(): ?string
    {
        try
        {
            $id = Auth::id();
            if($id === null || $id === '')
            {
                return null;
            }

            return (string) $id;
        }
        catch(\Throwable $e)
        {
            return null;
        }
    }

    private function canManageGuides(): bool
    {
        $settings = $this->readSettings();
        $allowed = $this->normalizeIdList($settings['editorAccountIds'] ?? []);
        // Empty allow-list = view-only (Play only). Must explicitly list editor IDs.
        if($allowed === [])
        {
            return false;
        }

        $account_id = $this->currentAccountId();
        if($account_id === null || $account_id === '')
        {
            return false;
        }

        return in_array($account_id, $allowed, true);
    }

    private function assertCanManageGuides(): ?JsonResponse
    {
        if($this->canManageGuides())
        {
            return null;
        }

        return response()->json(['error' => 'You do not have permission to manage system guides.'], 403);
    }

    private function slugify(string $value): string
    {
        $slug = strtolower(trim($value));
        $slug = preg_replace('/[^a-z0-9]+/', '-', $slug) ?? '';
        $slug = trim($slug, '-');

        return $slug !== '' ? $slug : 'untitled';
    }

    private function routeToDir(string $url_key): string
    {
        $parts = array_filter(array_map('trim', preg_split('/[\\\\\\/]+/', $url_key) ?: []));
        if($parts === [])
        {
            return 'root';
        }

        return implode('/', array_map(function($part)
        {
            return $this->slugify($part);
        }, $parts));
    }

    private function defaultPath(array $guide, string $url_key): string
    {
        $title = $this->slugify($guide['title'] ?? $guide['id'] ?? 'guide');

        return $this->routeToDir($url_key).'/'.$title.'.json';
    }

    public function index(): JsonResponse
    {
        return response()->json($this->readIndex());
    }

    public function store(Request $request): JsonResponse
    {
        if($request->input('type') === 'settings' || $request->has('settings'))
        {
            return $this->storeSettings($request);
        }

        if($denied = $this->assertCanManageGuides())
        {
            return $denied;
        }

        $guide = $request->input('guide');
        if(!is_array($guide) || !isset($guide['steps']) || !is_array($guide['steps']))
        {
            return response()->json(['error' => 'guide with steps is required'], 422);
        }

        $url_key = (string) ($request->input('urlKey') ?? $guide['url'] ?? '/');
        $path = $this->safeRelativePath((string) ($request->input('path') ?? $this->defaultPath($guide, $url_key)));
        $absolute = $this->guidesRoot().'/'.$path;

        File::ensureDirectoryExists(dirname($absolute));
        File::put($absolute, json_encode($guide, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES)."\n");

        $index = $this->readIndex();
        $guides = $index['guides'];
        $entry = [
            'id' => (string) ($guide['id'] ?? uniqid('guide-', true)),
            'title' => (string) ($guide['title'] ?? 'Untitled guide'),
            'url' => $url_key,
            'path' => $path,
            'updatedAt' => now()->toIso8601String(),
        ];

        $existing = collect($guides)->search(function($item) use ($entry, $path)
        {
            return ($item['id'] ?? null) === $entry['id'] || ($item['path'] ?? null) === $path;
        });

        if($existing !== false)
        {
            $guides[$existing] = $entry;
        }
        else
        {
            $guides[] = $entry;
        }

        $index['guides'] = array_values($guides);
        $this->writeIndex($index);

        return response()->json(['ok' => true, 'path' => $path, 'entry' => $entry]);
    }

    private function storeSettings(Request $request): JsonResponse
    {
        $settings = $request->input('settings');
        if(!is_array($settings))
        {
            return response()->json(['error' => 'settings object is required'], 422);
        }

        $path = $this->safeRelativePath((string) ($request->input('path') ?: 'settings.json'));
        if($path !== 'settings.json')
        {
            return response()->json(['error' => 'settings must be stored as settings.json'], 422);
        }

        $absolute = $this->guidesRoot().'/'.$path;
        File::ensureDirectoryExists(dirname($absolute));

        $payload = $this->buildSettingsPayload($settings, $this->readSettings());
        File::put($absolute, json_encode($payload, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES)."\n");

        return response()->json(['ok' => true, 'path' => $path, 'settings' => $payload]);
    }

    public function destroy(Request $request): JsonResponse
    {
        if($denied = $this->assertCanManageGuides())
        {
            return $denied;
        }

        $index = $this->readIndex();
        $guide_id = $request->input('guideId');
        $path = $request->input('path');

        $entry = collect($index['guides'])->first(function($item) use ($guide_id, $path)
        {
            if($guide_id && ($item['id'] ?? null) === $guide_id)
            {
                return true;
            }
            if($path && ($item['path'] ?? null) === $path)
            {
                return true;
            }

            return false;
        });

        $resolved_path = $path ?: ($entry['path'] ?? null);
        if($resolved_path)
        {
            $absolute = $this->guidesRoot().'/'.$this->safeRelativePath($resolved_path);
            if(File::exists($absolute))
            {
                File::delete($absolute);
            }
        }

        $index['guides'] = array_values(array_filter($index['guides'], function($item) use ($guide_id, $path, $entry)
        {
            if($guide_id && ($item['id'] ?? null) === $guide_id)
            {
                return false;
            }
            if($path && ($item['path'] ?? null) === $path)
            {
                return false;
            }
            if($entry && ($item['id'] ?? null) === ($entry['id'] ?? null))
            {
                return false;
            }

            return true;
        }));

        $this->writeIndex($index);

        return response()->json(['ok' => true]);
    }
}
