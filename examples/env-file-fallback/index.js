import assert from 'node:assert'
import chalk from 'chalk'

console.log(chalk.cyan(`Test Name: ${process.env.TEST_NAME}`))
console.log(`Environment: ${process.env.NODE_ENV}`)
console.log(`ENVVAR: ${process.env.ENVVAR}`)

assert(process.env.NODE_ENV === 'fallback-file')
assert(process.env.ENVVAR === 'exists')

console.log(chalk.green('Asserts Pass!'))
