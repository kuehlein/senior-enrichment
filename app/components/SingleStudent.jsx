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
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount () {
    axios.get(`/api/students/${this.props.match.params.studentId}`)
      .then(res => res.data)
      .then(student => this.setState({ student }))
      .catch(console.error)
  }

  handleClick () {
    axios.delete(`/api/students/${this.state.student.id}`)
      .then(res => res.data)
      .then(() => this.props.history.push(`/`))
      .catch(console.error)
  }

  render () {
    const student = this.state.student
console.log(student)
    return (
      <div>
        <h4>Student Name:</h4><div>{ student.name }</div>
        <h4>Student Email:</h4><div>{ student.email }</div>
        <h4>Student Campus:</h4><div>{
          student.campus &&
          <Link to={`/campuses/${student.campusId}`}>{ student.campus.name }</Link>
        }</div>
        <button
          className='button'
          onClick={ () => this.handleClick(student) }
        >Delete Student</button>
      </div>
    )
  }

}

// add change campus functionality and edit
