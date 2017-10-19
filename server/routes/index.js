'use strict'

const router = require('express').Router()
const db = require('../../db')


// path to routes for models
router.use('/students', require('./students'))
router.use('/campuses', require('./campuses'))


module.exports = router
