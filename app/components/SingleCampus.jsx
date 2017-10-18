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

  handleClick () {
    axios.delete(`/api/campuses/${this.state.campus.id}`)
      .then(res => res.data)
      .then(() => this.props.history.push(`/`))
      .catch(console.error)
  }

  render () {
    const campus = this.state.campus
    const students = campus.students

    return (
      <div>
        <h4>Campus Name:</h4><div>{ campus.name }</div>
        <h4>Students Attending:</h4>
        {
          students
            ? <div>{ <Table students={ students } /> }</div>
            : <div>Campus has no students</div>
        }
        <button
          className='button'
          onClick={ () => this.handleClick(campus) }
        >Delete Campus</button>
      </div>
    )
  }

}

// add delete and edit functionality

