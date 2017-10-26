'use strict'

const router = require('express').Router()
const Student = require('../../db/models/student')
const Campus = require('../../db/models/campus')
const err = require('../utils')


// find all students
router.get('/', (req, res, next) => {
  Student.findAll()
    .then(students => res.send(students))
    .catch(next)
})

router.param('studentId', (req, res, next, id) => {
  Student.findById(id, { include: { model: Campus } })
  .then(student => {
    if (!student) next(err(404, 'Student not found'))
    req.student = student
    next()
  })
  .catch(next)
})

// find student by id
router.get('/:studentId', (req, res, next) => {
  res.json(req.student)
})

// create student
router.post('/', (req, res, next) => {
  Student.create(req.body)
    .then(student => {
      res.status(201).send(student.dataValues)
    })
    .catch(next)
})

// update student
router.put('/:studentId', (req, res, next) => {
  req.student.update(req.body)
    .then(student => res.status(200).json(student))
    .catch(next)
})

// delete student
router.delete('/:studentId', (req, res, next) => {
  req.student.destroy()
    .then(() => res.status(204).end())
    .catch(next)
})


module.exports = router
