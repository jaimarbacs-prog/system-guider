<?php

use App\Http\Controllers\SystemGuiderController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::match(['get', 'post', 'delete'], '/__sg/guides', function (Request $request) {
    $controller = app(SystemGuiderController::class);

    return match ($request->method()) {
        'GET' => $controller->index(),
        'POST' => $controller->store($request),
        'DELETE' => $controller->destroy($request),
        default => response()->json(['error' => 'Method not allowed'], 405),
    };
})->name('system-guider.guides');
