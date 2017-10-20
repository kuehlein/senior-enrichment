'use strict'

import axios from 'axios'


/*------- action types -------*/
const GET_STUDENT = 'GET_STUDENT'
const CREATE_STUDENT = 'CREATE_STUDENT'
const UPDATE_STUDENT = 'UPDATE_STUDENT'
const DESTROY_STUDENT = 'DESTROY_STUDENT'


/*----- action creators -----*/
export const getStudent = (student) => ({
  type: GET_STUDENT,
  student
})

export const createStudent = (student) => ({
  type: CREATE_STUDENT,
  student
})

export const updateStudent = (student) => ({
  type: UPDATE_STUDENT,
  student
})

export const destroyStudent = (student) => ({
  type: DESTROY_STUDENT,
  student
})


/*----- thunk creators -----*/
export function fetchStudent(studentId) {
  return function thunk(dispatch) {
    return axios.get(`/api/students/${studentId}`)
      .then(res => res.data)
      .then(student => dispatch(getStudent(student)))
      .catch(console.error)
  }
}

export function makeStudent(student) {
  return function thunk(dispatch) {
    return axios.post('/api/students', student)
      .then(res => res.data)
      .then(newStudent => {
        dispatch(createStudent(newStudent))
        return newStudent
      })
      .catch(console.error)
  }
}

export function editStudent(studentId, history) {
  return function thunk(dispatch) {
    return axios.put(`/api/students/${studentId}`)
      .then(res => res.data)
      .then(student => dispatch(updateStudent(student)))
      .then(student => history.push(`/students/${newStudent.id}`))
      .catch(console.error)
  }
}

export function deleteStudent(studentId) {
  return function thunk(dispatch) {
    return axios.delete(`/api/students/${studentId}`)
      .then(res => res.data)
      .then(student => dispatch(destroyStudent(student)))
      .catch(console.error)
  }
}


/*----- reducer -----*/
export default (state = {}, action) => {
  switch (action.type) {

    case GET_STUDENT:
      return action.student

    case CREATE_STUDENT:
      return action.student

    case UPDATE_STUDENT:
      return action.student

      case DESTROY_STUDENT:
        return state = {}

    default:
      return state
  }
}
