'use strict'

import axios from 'axios'


/*------- action types -------*/
const GET_STUDENTS = 'GET_STUDENTS'


/*----- action creators -----*/
export const getStudents = (students) => ({
  type: GET_STUDENTS,
  students
})


/*----- thunk creators -----*/
export function fetchStudents() {
  return function thunk(dispatch) {
    return axios.get('/api/students')
      .then(res => res.data)
      .then(students => dispatch(getStudents(students)))
      .catch(console.error)
  }
}


/*----- reducer -----*/
export default (state = [], action) => {
  switch (action.type) {

    case GET_STUDENTS:
      return action.students

    default:
      return state
  }
}
