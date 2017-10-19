'use strict'

import axios from 'axios'


/*------- initial state --------*/
const initialState = {
  name: ''
}


/*------- action types -------*/
const GET_CAMPUS = 'GET_CAMPUS'
const CREATE_CAMPUS = 'CREATE_CAMPUS'
const UPDATE_CAMPUS = 'UPDATE_CAMPUS'


/*----- action creators -----*/
export const getCampus = (campus) => ({
  type: GET_CAMPUS,
  campus
})

export const createCampus = (campus) => ({
  type: CREATE_CAMPUS,
  campus
})

export const updateCampus = (campus) => ({
  type: UPDATE_CAMPUS,
  campus
})


/*----- thunk creators -----*/
export function fetchCampus() {
  return function thunk(dispatch) {
    return axios.get('/api/campuses/:id')
      .then(res => res.data)
      .then(campus => dispatch(getCampus(campus)))
      .catch(console.error)
  }
}

export function makeCampus() {
  return function thunk(dispatch) {
    return axios.post('/api/campuses')
      .then(res => res.data)
      .then(campus => dispatch(createCampus(campus)))
      .catch(console.error)
  }
}

export function editCampus() {
  return function thunk(dispatch) {
    return axios.put('/api/campuses/:id')
      .then(res => res.data)
      .then(campus => dispatch(updateCampus(campus)))
      .catch(console.error)
  }
}


/*----- reducer -----*/
export default (state = initialState, action) => {
  switch (action.type) {

    case GET_CAMPUS:
      return ({
        ...state,
        name: action.campus
      })

    case CREATE_CAMPUS:
      return ({
        ...state,
        name: action.campus
      })

    case UPDATE_CAMPUS:
      return ({
        ...state,
        name: action.campus
      })

    default:
      return state
  }
}
