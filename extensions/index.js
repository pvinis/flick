const runMacos = require('./macos')

const runExtensions = (shade) => {
  console.log('Running macos..')
  runMacos(shade)
}

module.exports = runExtensions
