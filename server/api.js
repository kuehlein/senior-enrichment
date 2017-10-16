'use strict'

const api = require('express').Router()
const db = require('../db')


api.use('/students', require('./students'))
api.use('/campuses', require('./campuses'))


// error handling middleware
api.use((err, req, res, next) =>
  res.status(err.status || 500).send(err.message || 'Internal Error')
)


module.exports = api
