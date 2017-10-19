'use strict'

const debug = require('debug')('sql')
const Sequelize = require('sequelize')
const pkg = require('../package.json')
const chalk = require('chalk')

const name = process.env.DATABASE_NAME || pkg.name
const connectionString = process.env.DATABASE_connectionString || `postgres://localhost:5432/${name}`

console.log(chalk.yellow(`Opening database connection to ${connectionString}`))


// creates database
const db = new Sequelize(connectionString, {
  logging: debug,
  native: true
})


module.exports = db
