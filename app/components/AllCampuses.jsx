'use strict'

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


export default class AllCampuses extends Component {
  constructor() {
    super()
    this.state = {
      campuses: []
    }
  }

  componentDidMount() {
    axios.get('/api/campuses/')
      .then(res => res.data)
      .then(campuses => this.setState({ campuses }))
      .catch(console.error)
  }

  render() {
    const campuses = this.state.campuses.map(campus => (
      <div key={campus.id} >
        <div><Link to={`/campuses/${campus.id}`}>{campus.name}</Link></div>
      </div>
    ))

    return (
      <div>
        <h1>Our Locations</h1>
        <div>
          {campuses}
        </div>
        <button className='button'><Link to='/campuses/add'>Add A Campus</Link></button>
      </div>
    )
  }

}

// delete functionality
