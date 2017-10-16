'use strict'

const db = require('./_db')


module.exports = db

// makes all associations in models
require('./models')
