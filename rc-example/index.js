const assert = require('assert')
const chalk = require('chalk')

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

const possibleEnvironments = ['test', 'production']
assert(!!~possibleEnvironments.indexOf(process.env.NODE_ENV))
assert(process.env.ENVVAR === 'exists')
const possibleFilePaths = ['./.env-cmdrc', './.cmdrc.json', './async-rc.js']
assert(!!~possibleFilePaths.indexOf(process.env.ENV_PATH))

console.log(chalk.green('Asserts Pass!'))
