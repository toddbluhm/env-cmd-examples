module.exports = Promise.resolve({
  prod: {
    TEST_NAME: 'Async RC File Test',
    NODE_ENV: 'production',
    ENVVAR: 'exists',
    ENV_PATH: './async-rc.js'
  },
  test: {
    TEST_NAME: 'Async RC File Test',
    NODE_ENV: 'test',
    ENVVAR: 'exists',
    ENV_PATH: './async-rc.js'
  }
})
