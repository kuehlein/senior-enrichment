'use strict'

const api = require('express').Router()
const db = require('../db')


// path to all routes
api.use(require('./routes'))


// error handling middleware
api.use((err, req, res, next) =>
  res.status(err.status || 500).send(err.message || 'Internal Error')
)


module.exports = api
