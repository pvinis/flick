const runApplescript = require('run-applescript')
 
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

module.exports = run
