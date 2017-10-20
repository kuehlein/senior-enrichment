'use strict'

import React, { Component } from 'react'
import axios from 'axios'


export default class EditStudent extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   inputName: '',
    //   inputEmail: '',
    //   inputCampus: 0
    // }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    const name = this.state.inputName
    const email = this.state.inputEmail
    const campusId = this.state.inputCampus
    const student = {}
    if (name) student.name = name
    if (email) student.email = email
    if (campusId) student.campusId = campusId

    // axios.put(`/api/students/${this.props.match.params.studentId}`, student)
    //   .then(res => res.data)
    //   .then(editedStudent => this.props.history.push(`/students/${editedStudent.id}`))
    //   .catch(console.error)
  }

  render() {
    return (
      <div>
        <h3>Edit Student</h3><br />
        <form onSubmit={ this.handleSubmit }>
          <p className='title'>Name<input
            type='text'
            name='name'
          /></p>
          <p className='title'>Email<input
            type='text'
            name='email'
          /></p>
          <p className='title'>Campus<input
            type='text'
            name='campusId'
          /></p>
          <button type='submit' className='nav-option button'>Edit Student</button>
        </form>
      </div>
    )
  }

}
