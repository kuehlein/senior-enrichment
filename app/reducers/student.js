'use strict'

import axios from 'axios'


/*------- initial state --------*/
const initialState = {
  student: {}
}


/*------- action types -------*/
const GET_STUDENT = 'GET_STUDENT'
const CREATE_STUDENT = 'CREATE_STUDENT'
const UPDATE_STUDENT = 'UPDATE_STUDENT'


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


/*----- thunk creators -----*/
export function fetchStudent() {
  return function thunk(dispatch) {
    return axios.get('/api/students/:id')
      .then(res => res.data)
      .then(student => dispatch(getStudent(student)))
      .catch(console.error)
  }
}

export function makeStudent() {
  return function thunk(dispatch) {
    return axios.post('/api/students')
      .then(res => res.data)
      .then(student => dispatch(createStudent(student)))
      .catch(console.error)
  }
}

export function editStudent() {
  return function thunk(dispatch) {
    return axios.put('/api/students/:id')
      .then(res => res.data)
      .then(student => dispatch(updateStudent(student)))
      .catch(console.error)
  }
}


/*----- reducer -----*/
export default (state = initialState, action) => {
  switch (action.type) {

    case GET_STUDENT:
      return Object.assign({}, state, { student: action.student }) // ({...state, student: action.student})

    case CREATE_STUDENT:
      return Object.assign({}, state, { student: action.student }) // ({...state, student: action.student})

    case UPDATE_STUDENT:
      return Object.assign({}, state, { student: action.student }) // ({...state, student: action.student})

    default:
      return state
  }
}
