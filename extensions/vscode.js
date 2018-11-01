const fs = require('fs')
const chalk = require('chalk')

const home = require('os').homedir()
const settingsFile = `${home}/Library/Application Support/Code/User/settings.json`

const name = 'VSCode'

const shouldRun = () => {
  return fs.existsSync(settingsFile)
}

const run = shade => {
  fs.readFile(settingsFile, 'utf-8', (err, data) => {
    if (err) { 
      console.log(err)
      return 
    }
    const colorTheme = `Base16 ${shade ? 'Dark' : 'Light'} Tomorrow`
    const newData = data.replace(/("workbench\.colorTheme": ")(.*)(",)/g, `$1${colorTheme}$3`)
    if (newData === data) {
      console.log(chalk.red(`Couldn't change the VSCode theme.\nMake sure you have \`workspace.colorTheme\` set.`))
    }
    fs.writeFileSync(settingsFile, newData, 'utf-8', (err) => {
      if (err) {
        console.log(err)
        return
      }
    })
  })
}

module.exports = {
  name,
  shouldRun,
  run,
}
