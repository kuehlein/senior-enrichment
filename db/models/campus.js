'use strict'

const db = require('../')
const Sequelize = require('sequelize')


// model for campus
const Campus = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true }
  }
})


module.exports = Campus
