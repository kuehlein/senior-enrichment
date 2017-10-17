'use strict'

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


export default class Students extends Component {
  constructor() {
    super()
    this.state = {
      students: []
    }
  }

  componentDidMount() {
    axios.get('/api/students/')
      .then(res => res.data)
      .then(students => this.setState({ students }))
      .catch(console.error)
  }

  render() {
    const students = this.state.students.map(student => (
      <tr key={student.id} >
        <td><Link to={`/students/${student.id}`}>{student.name}</Link></td>
        <td>{student.email}</td>
      </tr>
    ))

    return (
      <table>
        <tbody>
          <tr>
            <th>Student</th>
            <th>Email</th>
          </tr>
          {students ? students : <tr>Directory Empty</tr>}
        </tbody>
      </table>
    )
  }

}


