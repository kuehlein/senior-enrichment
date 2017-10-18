'use strict'

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Table from './Table'


export default class AllStudents extends Component {
  constructor () {
    super()
    this.state = {
      students: []
    }
  }

  componentDidMount () {
    axios.get('/api/students/')
      .then(res => res.data)
      .then(students => this.setState({ students }))
      .catch(console.error)
  }

  render () {
    return (
      <div>
        <Table students={this.state.students}/>
        <button className='button'><Link to='/students/add'>Add A Student</Link></button>
      </div>
    )
  }

}


// delete functionality
