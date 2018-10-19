const assert = require('assert')

console.log(`Environment ${process.env.NODE_ENV}`)
console.log(`ENVVAR: ${process.env.ENVVAR}`)

const possibleValues = ['development', 'test', 'rc-file']

assert(~possibleValues.indexOf(process.env.NODE_ENV))
assert(process.env.ENVVAR === 'exists')

console.log('Asserts Pass!')
