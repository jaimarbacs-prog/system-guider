import SystemGuider from '../src/index.js'
import createProfileGuide from './guides/create-profile.json'
import quickContactGuide from './guides/quick-contact.json'
import preferencesComboGuide from './guides/preferences-combo.json'

/** Stable page key so guides match on localhost and GitHub Pages (/system-guider/). */
const DEMO_URL = '/'

/** Short overview recording shown beside the longer flows. */
const panelOverviewGuide = {
  id: 'panel-overview',
  title: 'Open System Guider panel',
  version: 1,
  steps: [
    {
      id: 'open-panel-step',
      selector: '[data-guider="open-panel"]',
      action: 'click',
      title: 'Open the panel',
      description: 'Use Open panel to manage recordings, settings, and playback.',
      waitFor: null,
    },
    {
      id: 'play-sample-step',
      selector: '[data-guider="play-sample"]',
      action: 'click',
      title: 'Play a sample guide',
      description: 'This starts one of the preloaded recordings for the page.',
      waitFor: null,
    },
  ],
}

const guider = SystemGuider.init({
  storageKey: 'system-guider:demo',
  accountId: 'demo-editor',
  showLauncher: true,
  guidesByUrl: true,
  getUrlKey: () => DEMO_URL,
  settings: {
    editorAccountIds: ['demo-editor'],
    showAccountId: true,
    // Demo lives at `/` (and GitHub Pages); don't hide the orb on the home path.
    hiddenUrls: [],
  },
  guides: {
    [DEMO_URL]: [
      createProfileGuide,
      quickContactGuide,
      preferencesComboGuide,
      panelOverviewGuide,
    ],
  },
  onComplete: () => console.log('Demo guide completed'),
})

document.querySelector('#open-panel')?.addEventListener('click', () => {
  guider.openPanel()
})

document.querySelector('#play-sample')?.addEventListener('click', () => {
  guider.playPageGuide()
})

document.querySelector('#demo-form')?.addEventListener('submit', (event) => {
  event.preventDefault()
  const toast = document.querySelector('#toast')
  if (!toast) return
  toast.style.display = 'block'
  setTimeout(() => { toast.style.display = 'none' }, 1800)
})
