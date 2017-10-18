'use strict'

import React, { Component } from 'react'
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
    return <Table students={this.state.students}/>
  }

}
