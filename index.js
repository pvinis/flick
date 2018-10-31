#!/usr/bin/env node

const chalk = require('chalk')
const fs = require('fs')
const minimist = require('minimist')
const Configstore = require('configstore')
const pkg = require('./package.json')

const Shade = {
  Light: false,
  Dark: true,
}

const CfgKeys = {
  Dark: 'dark',
}

const config = new Configstore(
  pkg.name, 
  {
     [CfgKeys.Dark]: false,
  },
  {
    globalConfigPath: true,
  })

const run = () => {
  const argv = require('minimist')(process.argv.slice(2));

  const arg0 = argv._[0]
  const shade = (() => {
    if (arg0 === 'on' || arg0 === 'light') {
      return Shade.Light
    } else if (arg0 === 'off' || arg0 === 'dark') {
      return Shade.Dark
    } else {
      const currShade = config.get(CfgKeys.Dark)
      return !currShade
    }
  })()
  go(shade)
}

const goLight = () => go(Shade.Light)
const goDark = () => go(Shade.Dark)

const go = (shade) => {
  config.set(CfgKeys.Dark, shade)

  const outString = shade ? 'DARK' : 'LIGHT'
  console.log(`It is now ${chalk.green(outString)}.`)

  const home = require('os').homedir()
  fs.writeFileSync(`${home}/.flickrc`, outString)
}

run()
