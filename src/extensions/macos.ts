const runApplescript = require('run-applescript')

import { Extension } from '../types'


const script = shade => `
  tell application "System Events"
    tell appearance preferences
      set dark mode to ${shade}
    end tell
  end tell
`


const macos: Extension = {
  name: 'macOS',
  shouldRun: () => {
  return process.platform === 'darwin'
},
 run: shade => {
  runApplescript(script(shade))
}
}

module.exports = macos
