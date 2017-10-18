'use strict'

import React, { Component } from 'react'
import axios from 'axios'


export default class AddCampus extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    axios.post('/api/campuses', { name: this.state.inputValue })
      .then(res => res.data)
      .then(campus => this.props.history.push(`/campuses/${campus.id}`))
      .catch(console.error)
  }

  render() {
    return (
      <div>
        <h3>Add A Campus</h3><br />
        <form onSubmit={ this.handleSubmit }>
          <p>Name <input
            type='text'
            name='name'
            value={ this.state.inputValue }
            onChange={ e => this.setState({ inputValue: e.target.value }) }
          /></p>
          <button type='submit' className='nav-option button'>Add Campus</button>
        </form>
      </div>
    )
  }

}
