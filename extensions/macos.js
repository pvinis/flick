const runApplescript = require('run-applescript')
 
const name = 'macOS'

const shouldRun = () => {
  return process.platform === 'darwin'
}

const script = shade => `
  tell application "System Events"
    tell appearance preferences
      set dark mode to ${shade}
    end tell
  end tell
`

const run = shade => {
  runApplescript(script(shade))
}

module.exports = {
  name,
  shouldRun,
  run,
}
