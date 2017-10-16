'use strict'

const api = require('express').Router()
const db = require('../db')


api.use('/students', require('./students'))
api.use('/campuses', require('./campuses'))


// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
api.use('/*', (req, res) => res.send({hello: 'world'}))

// error handling middleware
api.use((err, req, res, next) =>
  res.status(err.status || 500).send(err.message || 'Internal Error')
)


module.exports = api
