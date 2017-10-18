'use strict'

import React, { Component } from 'react'
import axios from 'axios'


export default class AddStudent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputName: '',
      inputEmail: '',
      inputCampus: 0
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    const student = {
      name: this.state.inputName,
      email: this.state.inputEmail,
      campusId: this.state.inputCampus
    }

    event.preventDefault()
    axios.post('/api/students/', student)
      .then(res => res.data)
      .then(student => this.props.history.push(`/students/${student.id}`))
      .catch(console.error)
  }

  render() {
    return (
      <div>
        <h1>Add A Student</h1><br />
        <form onSubmit={ this.handleSubmit }>
          <p className='title'>Name <input
            type='text'
            name='name'
            value={ this.state.inputName }
            onChange={ e => this.setState({ inputName: e.target.value }) }
          /></p>
          <p className='title'>Email<input
            type='text'
            name='email'
            value={ this.state.inputEmail }
            onChange={ e => this.setState({ inputEmail: e.target.value }) }
          /></p>
          <p className='title'>Campus<input
            type='text'
            name='campusId'
            value={ this.state.inputCampus || '' }
            onChange={ e => this.setState({ inputCampus: e.target.value }) }
          /></p>
          <button type='submit' className='nav-option button'>Add Student</button>
        </form>
      </div>
    )
  }

}
