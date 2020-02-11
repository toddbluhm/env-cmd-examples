const assert = require('assert')
const chalk = require('chalk')

console.log(process.argv)
console.log(chalk.cyan(`Test Name: ${process.env.TEST_NAME}`))
console.log(`Environment ${process.env.NODE_ENV}`)
console.log(`ENVVAR: ${process.env.ENVVAR}`)
console.log(`ENV_PATH: ${process.env.ENV_PATH}`)

// Testing the silent option
if (process.env.ENV_PATH === './non-existent') {
  assert(process.env.NODE_ENV === undefined)
  assert(process.env.ENVVAR === undefined)
  console.log(chalk.green('Asserts Pass!'))
  process.exit(0)
}

assert(process.env.NODE_ENV === 'env-file')
assert(process.env.ENVVAR === 'exists')
const possibleFilePaths = ['./.env', './.env-file', './async-env.js', './use-shell.env', './shell-script.env']
assert(!!~possibleFilePaths.indexOf(process.env.ENV_PATH))
const option = process.argv[process.argv.length - 1]
if (option.includes('--path')) {
  assert(option.split('=')[1] === './.env')
}

console.log(chalk.green('Asserts Pass!'))
