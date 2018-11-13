import { Extension } from '../types'


const extensions: Extension[] = [
  require('./macos'),
  require('./vscode'),
]

const runExtensions = (shade) => {
  extensions.forEach(ext => {
    if (!ext.shouldRun()) { return }
    console.log(`Running ${ext.name}..`)
    ext.run(shade)
  })
}

module.exports = runExtensions
