'use strict'

import { combineReducers } from 'redux'

import allStudents from './allStudents'
import allCampuses from './allCampuses'

import student from './student'
import campus from './campus'


const rootReducer = combineReducers(
  allStudents,
  allCampuses,
  student,
  campus
)


export default rootReducer
