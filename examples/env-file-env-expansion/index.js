const assert = require('assert')
const chalk = require('chalk')

console.log(process.argv)
console.log(chalk.cyan(`Test Name: ${process.env.TEST_NAME}`))
console.log(`Environment ${process.env.NODE_ENV}`)
console.log(`ENVVAR: ${process.env.ENVVAR}`)
console.log(`ENV_PATH: ${process.env.ENV_PATH}`)

assert(process.env.NODE_ENV === 'env-file')
assert(process.env.ENVVAR === 'exists')
assert(process.env.ENV_PATH === './.env')
const option = process.argv[process.argv.length - 1]
if (option.includes('--path')) {
  assert(option.split('=')[1] === './.env')
}

console.log(chalk.green('Asserts Pass!'))
