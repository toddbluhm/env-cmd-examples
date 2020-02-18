const assert = require('assert')
const chalk = require('chalk')

console.log(chalk.cyan(`Test Name: ${process.env.TEST_NAME}`))
console.log(`Environment ${process.env.NODE_ENV}`)
console.log(`ENVVAR: ${process.env.ENVVAR}`)
console.log(`ENV_PATH: ${process.env.ENV_PATH}`)

assert(process.env.NODE_ENV === undefined)
assert(process.env.ENVVAR === undefined)
assert(process.env.ENV_PATH === './non-existent')

console.log(chalk.green('Asserts Pass!'))
