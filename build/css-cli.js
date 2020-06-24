const path = require('path')
const fs = require('fs')
const chalk = require('chalk')

const conf = require('../packages/styles/conf.json')

console.log(chalk.cyan(`Configure css libs ...\n`))

conf.forEach(component => {
  let libName = Object.keys(component)[0]
  let defList = ['reset', 'theme']
  let cssList = defList.concat(component[libName])
  let dest = path.resolve(__dirname, '../lib', libName, 'style', 'index.js')
  if (fs.existsSync(dest)) {
    fs.unlinkSync(dest)
  } else {
    fs.mkdirSync(path.resolve(__dirname, '../lib', libName, 'style'), { recursive: true })
  }
  let content = ''
  cssList.forEach(css => {
    content += `require("../../styles/lib/${css}.css");\n`
  })
  fs.writeFileSync(dest, content)
})

const getCssLib = (name) => {
  return path.resolve(__dirname, '../packages/styles/dist', name)
}

const getCssDest = (name) => {
  return path.resolve(__dirname, '../lib/styles', name)
}

const styleDir = getCssDest('lib')
if (!fs.existsSync(styleDir)) {
  fs.mkdirSync(styleDir, { recursive: true })
}

const df = getCssDest('index.css')
if (fs.existsSync(df)) fs.unlinkSync(df)
fs.copyFileSync(getCssLib('index.css'), df)

fs.readdirSync(getCssLib('lib')).forEach(file => {
  const df = getCssDest(`lib/${file}`)
  if (fs.existsSync(df)) fs.unlinkSync(df)
  fs.copyFileSync(getCssLib(`lib/${file}`), df)
})

console.log(chalk.cyan('Configure css libs complete.\n'))
