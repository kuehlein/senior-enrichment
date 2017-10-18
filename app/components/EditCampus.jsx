'use strict'

import React, { Component } from 'react'
import axios from 'axios'


export default class EditCampus extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputName: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    const name = this.state.inputName

    const campus = {}
    if (name) campus.name = name

    axios.put(`/api/campuses/${this.props.match.params.campusId}`, campus)
      .then(res => res.data)
      .then(editedCampus => this.props.history.push(`/campuses/${editedCampus.id}`))
      .catch(console.error)
  }

  render() {
    return (
      <div>
        <h3>Edit Campus</h3><br />
        <form onSubmit={ this.handleSubmit }>
          <p className='title'>Name<input
            type='text'
            name='name'
            value={ this.state.inputName }
            onChange={e => this.setState({ inputName: e.target.value })}
          /></p>
          <button type='submit' className='nav-option button'>Edit Campus</button>
        </form>
      </div>
    )
  }

}
