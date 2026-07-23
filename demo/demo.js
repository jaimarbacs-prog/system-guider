import SystemGuider from '../src/index.js'
import sampleGuide from './guides/mark-attendance.json'

const pagePath = window.location.pathname

const quickOverviewGuide = {
  id: 'attendance-overview',
  title: 'Attendance page overview',
  version: 1,
  steps: [
    {
      id: 'overview-start',
      selector: '[data-guider="mark-attendance-btn"]',
      action: 'click',
      title: 'Attendance help',
      description: 'This area starts the attendance workflow.',
      waitFor: null,
    },
  ],
}

const employeeGuide = {
  id: 'employee-attendance',
  title: 'Select an employee',
  version: 1,
  steps: [
    {
      id: 'employee-select',
      selector: '[data-guider="employee-select"]',
      action: 'input',
      title: 'Choose an employee',
      description: 'Select any employee from the list.',
      waitFor: { type: 'input', required: true, mode: 'interaction' },
    },
    {
      id: 'employee-save',
      selector: '[data-guider="submit-attendance"]',
      action: 'click',
      title: 'Save attendance',
      description: 'Save the completed attendance record.',
      waitFor: null,
    },
  ],
}

const guider = SystemGuider.init({
  storageKey: 'smart-attendance:guider',
  showLauncher: true,
  guidesByUrl: true,
  guides: {
    [pagePath]: [sampleGuide, quickOverviewGuide, employeeGuide],
  },
  onComplete: () => console.log('Attendance guide completed'),
})

document.querySelector('#help-guide')?.addEventListener('click', () => {
  guider.playPageGuide()
})

document.querySelector('#play-sample')?.addEventListener('click', () => {
  guider.playPageGuide()
})

document.querySelector('#attendance-form')?.addEventListener('submit', (event) => {
  event.preventDefault()
  const toast = document.querySelector('#toast')
  toast.style.display = 'block'
  setTimeout(() => { toast.style.display = 'none' }, 1800)
})
