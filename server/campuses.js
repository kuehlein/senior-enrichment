'use strict'

const router = require('express').Router()
const Campus = require('../db/models/campus')
const Student = require('../db/models/student')
const err = require('./utils')


// find all campuses
router.get('/', (req, res, next) => {
  Campus.findAll()
    .then(campuses => res.send(campuses))
    .catch(next)
})

router.param('campusId', (req, res, next, id) => {
  Campus.findById(id, { include: { model: Student } })
  .then(campus => {
    if (!campus) next(err(404, 'Campus not found'))
    req.campus = campus
    next()
  })
  .catch(next)
})

// find campus by id
router.get('/:campusId', (req, res, next) => {
  res.json(req.campus)
})

// create campus
router.post('/', (req, res, next) => {
  Campus.create(req.body)
    .then(campus => res.status(201).send(campus.dataValues))
    .catch(next)
})

// update campus
router.put('/:campusId', (req, res, next) => {
  req.campus.update(req.body)
    .then(campus => res.status(200).json(campus))
    .catch(next)
})

// delete campus
router.delete('/:campusId', (req, res, next) => {
  req.campus.destroy()
    .then(() => res.status(204).end())
    .catch(next)
})


module.exports = router
