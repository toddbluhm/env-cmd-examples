const assert = require('assert')
const chalk = require('chalk')

console.log(chalk.cyan(`Test Name: ${process.env.TEST_NAME}`))
console.log(`Environment ${process.env.NODE_ENV}`)
console.log(`ENVVAR: ${process.env.ENVVAR}`)
console.log(`ENV_PATH: ${process.env.ENV_PATH}`)

assert(process.env.NODE_ENV === 'env-file')
assert(process.env.ENVVAR === 'exists')
const possibleFilePaths = ['./.env', './.env-file', './async-env.js', './use-shell.env', './shell-script.env']
assert(!!~possibleFilePaths.indexOf(process.env.ENV_PATH))

console.log(chalk.green('Asserts Pass!'))
