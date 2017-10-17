'use strict'

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


export default class Campuses extends Component {
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

  render () {
    const campuses = this.state.campuses.map(campus => (
      <tr key={campus.id} >
        <td><Link to={`/campuses/${campus.id}`}>{campus.name}</Link></td>
      </tr>
    ))

    return (
      <table>
        <tbody>
          <tr>
            <th>Campus</th>
            <th>Email</th>
          </tr>
          {campuses ? campuses : <tr>Directory Empty</tr>}
        </tbody>
      </table>
    )
  }

}
