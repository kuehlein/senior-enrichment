'use strict'

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


export default class SingleStudent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      student: {}
    }
  }

  componentDidMount () {
    axios.get(`/api/students/${this.props.match.params.studentId}`)
      .then(res => res.data)
      .then(student => this.setState({ student }))
      .catch(console.error)
  }

  render () {
    const student = this.state.student

    return (
      <div>
        <div>{ student.name }</div>
        <div>{ student.email }</div>
        <div>{
          student.campus &&
          <Link to={`/campuses/${student.campusId}`}>{ student.campus.name }</Link>
        }</div>
      </div>
    )
  }

}
