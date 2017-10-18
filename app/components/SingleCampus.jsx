'use strict'

import React, { Component } from 'react'
import axios from 'axios'
import Table from './Table'


export default class SingleCampus extends Component {
  constructor (props) {
    super(props)
    this.state = {
      campus: {}
    }
  }

  componentDidMount () {
    axios.get(`/api/campuses/${this.props.match.params.campusId}`)
      .then(res => res.data)
      .then(campus => this.setState({ campus }))
      .catch(console.error)
  }

  render () {
    const campus = this.state.campus
    const students = campus.students

    return (
      <div>
        <div>{ campus.name }</div>
        { students && <div>{ <Table students={ students } /> }</div> }
      </div>
    )
  }

}
