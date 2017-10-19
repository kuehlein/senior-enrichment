'use strict'

const db = require('./_db')


// source of db for the rest of app
module.exports = db

// makes all associations in models
require('./models')
