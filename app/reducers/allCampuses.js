'use strict'

import axios from 'axios'


/*------- action types -------*/
const GET_CAMPUSES = 'GET_CAMPUSES'


/*----- action creators -----*/
export const getCampuses = (campuses) => ({
  type: GET_CAMPUSES,
  campuses
})


/*----- thunk creators -----*/
export function fetchCampuses() {
  return function thunk(dispatch) {
    return axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => dispatch(getCampuses(campuses)))
      .catch(console.error)
  }
}


/*----- reducer -----*/
export default (state = [], action) => {
  switch (action.type) {

    case GET_CAMPUSES:
      return action.campuses

    default:
      return state
  }
}
