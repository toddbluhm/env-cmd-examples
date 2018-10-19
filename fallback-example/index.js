const assert = require('assert')

console.log(`Environment ${process.env.NODE_ENV}`)
console.log(`ENVVAR: ${process.env.ENVVAR}`)

assert(process.env.NODE_ENV === 'fallback-file')
assert(process.env.ENVVAR === 'exists')

console.log('Asserts Pass!')
