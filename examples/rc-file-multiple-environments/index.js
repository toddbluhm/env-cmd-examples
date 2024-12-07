import assert from 'node:assert'
import chalk from 'chalk'

console.log(chalk.cyan(`Test Name: ${process.env.TEST_NAME}`))
console.log(`Environment: ${process.env.NODE_ENV}`)
console.log(`ENVVAR: ${process.env.ENVVAR}`)
console.log(`ENV_PATH: ${process.env.ENV_PATH}`)

assert(process.env.NODE_ENV === 'production')
assert(process.env.ENVVAR === 'exists')
assert(process.env.ENV_PATH === './.env-cmdrc')

console.log(chalk.green('Asserts Pass!'))
