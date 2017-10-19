'use strict'

const db = require('../')
const Sequelize = require('sequelize')


// student model
const Student = db.define('student', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { isEmail: true }
  }
})


module.exports = Student
