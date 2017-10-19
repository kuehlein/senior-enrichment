'use strict'

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'

import Table from './Table'
import { fetchStudents } from '../store'


class AllStudents extends Component {

  componentDidMount () {
    this.props.fetchStudents()
  }

  render () {
    return (
      <div>
        <h1>Student Directory</h1>
        <Table students={this.props.students}/>
        <button className='button'><Link to='/students/add'>Add A Student</Link></button>
      </div>
    )
  }

}

const mapStateToProps = (store) => ({ students: store.allStudents })

const mapDispatchToProps = (dispatch) => ({
  fetchStudents: () => dispatch(fetchStudents())
})


export default connect(mapStateToProps, mapDispatchToProps)(AllStudents)
