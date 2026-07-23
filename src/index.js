import './styles.css'
import { Guider } from './guider.js'

let activeInstance = null

const SystemGuider = {
  init(options = {}) {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      throw new Error('System Guider can only be initialized in a browser.')
    }
    activeInstance?.destroy()
    activeInstance = new Guider(options)
    return activeInstance
  },
}

export default SystemGuider
