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
const DESTROY_CAMPUS = 'DESTROY_CAMPUS'


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

export const destroyCampus = (campus) => ({
  type: DESTROY_CAMPUS,
  campus
})


/*----- thunk creators -----*/
export function fetchCampus(campusId) {
  return function thunk(dispatch) {
    return axios.get(`/api/campuses/${campusId}`)
      .then(res => res.data)
      .then(campus => dispatch(getCampus(campus)))
      .catch(console.error)
  }
}

export function makeCampus(campus) {
  return function thunk(dispatch) {
    return axios.post('/api/campuses', campus)
      .then(res => res.data)
      .then(newCampus => {
        dispatch(createCampus(newCampus))
        return newCampus
      })
      .catch(console.error)
  }
}

export function editCampus(campus) {
  return function thunk(dispatch) {
    return axios.put(`/api/campuses/${campus.id}`, campus)
      .then(res => res.data)
      .then(newCampus => dispatch(updateCampus(newCampus)))
      .then(newCampus => {
        history.push(`/campuses/${newCampus.id}`)
        return newCampus
      })
      .catch(console.error)
  }
}

export function deleteCampus(campusId) {
  return function thunk(dispatch) {
    return axios.delete(`/api/campuses/${campusId}`)
      .then(res => res.data)
      .then(campus => dispatch(destroyCampus(campus)))
      .catch(console.error)
  }
}


/*----- reducer -----*/
export default (state = initialState, action) => {
  switch (action.type) {

    case GET_CAMPUS:
      return Object.assign({}, state, action.campus)

    case CREATE_CAMPUS:
      return Object.assign({}, state, action.campus)

    case UPDATE_CAMPUS:
      return Object.assign({}, state, action.campus)

    case DESTROY_CAMPUS:
      return state = { name: '' }

    default:
      return state
  }
}
