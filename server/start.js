'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const {resolve} = require('path')

const app = express()

if (process.env.NODE_ENV !== 'production') {
  app.use(require('volleyball'))
}

//The code below works because `.use` returns `this` which is `app`. So what we want to return in the `module.exports` is `app`, and we can chain on that declaration because each method invokation returns `app` after mutating based on the middleware functions
module.exports = app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(express.static(resolve(__dirname, '..', 'public')))
  .use('/api', require('./api'))
  .get('/*', (_, res) => res.sendFile(resolve(__dirname, '..', 'public', 'index.html')))


if (module === require.main) {
  // Start listening only if we're the main module.

  const PORT = 1337

  const db = require('../db')
  db.sync() // { force:true }
    .then(() => {
      console.log('db synced')
      app.listen(PORT, () => console.log(`server listening on port ${PORT}`))
    })
    .catch(err =>
      console.error('Server is NOT listening, something went wrong :(', err, err.stack)
    )
}
