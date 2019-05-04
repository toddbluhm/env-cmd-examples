const assert = require('assert')

console.log(`Environment ${process.env.NODE_ENV}`)
console.log(`ENVVAR: ${process.env.ENVVAR}`)
console.log(`ENV_PATH: ${process.env.ENV_PATH}`)

assert(process.env.NODE_ENV === 'env-file')
assert(process.env.ENVVAR === 'exists')
assert(!!~['./.env', './.env-file'].indexOf(process.env.ENV_PATH))

console.log('Asserts Pass!')
