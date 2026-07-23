export type GuideAction = 'click' | 'input' | 'manual'

export interface WaitCondition {
  type: 'input'
  required: boolean
  mode?: 'value' | 'interaction'
}

export interface StepMatchHints {
  text?: string
  href?: string
  section?: string
  dataGuider?: string
  ariaLabel?: string
  name?: string
  placeholder?: string
  role?: string
  tag?: string
  type?: string
  id?: string
}

export interface GuideStep {
  id: string
  selector?: string
  /** Scoring hints for resilient targeting across layout/account differences. */
  match?: StepMatchHints
  action: GuideAction
  title: string
  description: string
  waitFor: WaitCondition | null
  settings?: {
    /** Delay before showing spotlight (ms). */
    delay?: number
    /** Delay before hiding spotlight when leaving step (ms). */
    hideDelay?: number
    autoAdvanceDelay?: number
    autoSkipMissing?: boolean
    /** Scroll target into view when highlighting. Default true. */
    autoScroll?: boolean
  }
}

export interface GuideSettings {
  reloadOnNavigate?: boolean
  resetBeforePlay?: 'reload' | 'none'
  resetBeforePlayDelay?: number
  autoScroll?: boolean
}

export interface GuiderUiSettings {
  animations?: boolean
  highlightMotion?: 'none' | 'pulse' | 'wobble' | 'fade'
  spotlightFade?: boolean
  animatedCursor?: boolean
  tipBg?: string
  tipText?: string
  skipBg?: string
  skipText?: string
  spotlightColor?: string
  overlayOpacity?: number
  transitionMs?: number
}

export interface GuiderSettings {
  resetBeforePlay?: 'reload' | 'none'
  reloadOnNavigate?: boolean
  resetBeforePlayDelay?: number
  /** Panel chrome theme. */
  theme?: 'dark' | 'light'
  /**
   * Account IDs allowed to record/manage.
   * Empty = view-only (Play only). Listed IDs get Record/Panel.
   */
  editorAccountIds?: string[]
  /**
   * Hover orb + type this PIN to open the settings panel when not an editor.
   * Digits only; empty disables.
   */
  bypassPin?: string
  /** Show Account ID under the launcher menu. Default true. */
  showAccountId?: boolean
  /** Pathnames where the floating toolbar is hidden. */
  hiddenUrls?: string[]
  ui?: GuiderUiSettings
}

export interface GuideDefinition {
  id: string
  title: string
  version: number
  url?: string
  steps: GuideStep[]
  settings?: GuideSettings
}

export interface GuiderLabels {
  next?: string
  back?: string
  close?: string
  skip?: string
  startRecording?: string
  stopRecording?: string
}

export interface GuiderOptions {
  panelPosition?: 'left'
  overlayOpacity?: number
  allowClose?: boolean
  storageKey?: string
  /** Host-app JSON storage (public/guides). Default false. */
  fileStorage?: boolean | {
    baseUrl?: string
    publicBase?: string
    downloadFallback?: boolean
  }
  zIndex?: number
  selectorTimeout?: number
  autoAdvanceOnInput?: boolean
  autoAdvanceDelay?: number
  autoSkipMissing?: boolean
  autoSkipMissingDelay?: number
  stableWaitTimeout?: number
  /** Max ms to poll for a missing step target (SPA page loads). Default 20000. */
  targetWaitTimeout?: number
  /** Poll interval while waiting for a step target. Default 250. */
  targetRetryInterval?: number
  showLauncher?: boolean
  /** Logged-in account id for editor allow-list checks. */
  accountId?: string | number | null
  guidesByUrl?: boolean
  urlMatch?: 'pathname' | 'full'
  getUrlKey?: () => string
  resetBeforePlay?: 'reload' | 'none'
  resetBeforePlayDelay?: number
  /** Soft navigation for another route (e.g. Inertia router.visit). */
  navigate?: (url: string) => void | Promise<void>
  settings?: GuiderSettings
  guides?: Record<string, GuideDefinition | GuideDefinition[]>
  labels?: GuiderLabels
  onComplete?: () => void
  onClose?: () => void
  onStepChange?: (step: GuideStep, index: number) => void
  onStepFail?: (step: GuideStep, index: number) => void
  onRecordStep?: (step: GuideStep) => void
}

export declare class Guider {
  constructor(options?: GuiderOptions)
  startRecording(): this
  continueRecording(): this
  stopRecording(): GuideDefinition
  load(guide: GuideDefinition | string, options?: { dirty?: boolean; mode?: string }): this
  updateSteps(steps: GuideStep[]): this
  removeStep(stepId: string): this
  moveStep(stepId: string, newIndex: number): this
  moveToPosition(stepId: string, position: number | string): this
  start(): this
  startFrom(stepIdOrIndex: string | number): this
  playPageGuide(guideId?: string): this
  getGuidesForCurrentPage(): GuideDefinition[]
  saveGuideForCurrentPage(): this
  setAccountId(accountId: string | number | null): this
  setReadOnly(readOnly: boolean): this
  setLauncherVisible(visible: boolean): this
  applyAccessPolicy(): this
  openPanel(): void
  closePanel(): void
  togglePanel(): void
  next(): this
  prev(): this
  skip(): this
  close(force?: boolean): boolean
  exportJSON(): string
  downloadJSON(filename?: string): this
  downloadAllGuides(): this
  importGuides(payload: GuideDefinition | GuideDefinition[] | string | { guides: GuideDefinition[] }, options?: { sourceLabel?: string }): Promise<GuideDefinition[]>
  copyJSON(): Promise<string>
  destroy(): void
  onUrlChange(): void
}

declare const SystemGuider: {
  init(options?: GuiderOptions): Guider
}

export default SystemGuider
