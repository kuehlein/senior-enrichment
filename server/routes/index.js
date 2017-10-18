'use strict'

const router = require('express').Router()
const db = require('../../db')


router.use('/students', require('./students'))
router.use('/campuses', require('./campuses'))


module.exports = router
