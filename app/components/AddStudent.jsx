'use strict'

import React, { Component } from 'react'
import axios from 'axios'


export default class AddStudent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      newStudent: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault()
    axios.post('/api/students/')
      .then(res => res.data)
      .then()
      .catch(console.error)
    // this.setState({ newStudent: {} })
  }

  render() {
    return (
      <div>
        <h5>Add Student:</h5>

        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            value={this.state.newStudent}
            onChange={e => this.setState({ newStudent: e.target.value })}
          />
          <button type='submit'>Add Student</button>
        </form>
      </div>
    )
  }
}
