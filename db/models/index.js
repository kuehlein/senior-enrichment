'use strict'

const Student = require('./student')
const Campus = require('./campus')


// model associations
Student.belongsTo(Campus)
Campus.hasMany(Student, {'onDelete': 'cascade', hooks: true})


module.exports = {
	Student,
	Campus
}
