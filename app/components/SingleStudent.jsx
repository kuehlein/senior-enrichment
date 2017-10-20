'use strict'

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'

import { fetchStudent, deleteStudent } from '../store'


class SingleStudent extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount () {
    this.props.fetchStudent(+this.props.match.params.studentId)
  }

  handleClick (student) {
    this.props.deleteStudent(student.id)
      .then(() => this.props.history.push(`/`))
      .catch(console.error)
  }

  render () {
    const student = this.props.student

    return (
      <div>
        <h4 className='title'>Student Name:</h4><div>{ student.name }</div>
        <h4 className='title'>Student Email:</h4><div>{ student.email }</div>
        <h4 className='title'>Student Campus:</h4><div>{
          student.campus &&
          <Link to={`/campuses/${student.campusId}`}>{ student.campus.name }</Link>
        }</div>
        <button
          className='button'
          onClick={ () => this.handleClick(student) }
        >Delete Student</button>
        <button
          className='button'
        ><Link to={`/students/${this.props.student.id}/edit`}>Edit Student</Link></button>
      </div>
    )
  }

}

const mapStateToProps = (store) => ({ student: store.student })

const mapDispatchToProps = (dispatch) => ({
  fetchStudent: (studentId) => dispatch(fetchStudent(studentId)),
  deleteStudent: (student) => dispatch(deleteStudent(student))
})


export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent)
