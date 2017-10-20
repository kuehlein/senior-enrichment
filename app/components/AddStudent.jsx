'use strict'

import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

import { makeStudent } from '../store'


class AddStudent extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    const student = {
      name: event.target.name.value,
      email: event.target.email.value,
      campusId: event.target.campusId.value
    }

    this.props.makeStudent(student)
      .then(student => this.props.history.push(`/students/${student.id}`))
      .catch(console.error)
  }

  render() {
    return (
      <div>
        <h1>Add A Student</h1><br />
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
          <button type='submit' className='nav-option button'>Add Student</button>
        </form>
      </div>
    )
  }

}


const mapStateToProps = (store) => ({ student: store.student })

const mapDispatchToProps = (dispatch, ownProps) => ({
  makeStudent: (student) => dispatch(makeStudent(student)),
})


export default connect(mapStateToProps, mapDispatchToProps)(AddStudent)
