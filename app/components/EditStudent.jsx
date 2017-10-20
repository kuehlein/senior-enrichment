'use strict'

import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

import { editStudent } from '../store'


class EditStudent extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    const name = event.target.name.value
    const email = event.target.email.value
    const campusId = event.target.campusId.value
    const student = { id: this.props.match.params.studentId }
    if (name) student.name = name
    if (email) student.email = email
    if (campusId) student.campusId = campusId

    this.props.editStudent(student)
    .then(student => this.props.history.push(`/students/${student.id}`))
    .catch(console.error)
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

const mapStateToProps = (store) => ({ student: store.student })

const mapDispatchToProps = (dispatch) => ({
  editStudent: (student) => dispatch(editStudent(student)),
})


export default connect(mapStateToProps, mapDispatchToProps)(EditStudent)
