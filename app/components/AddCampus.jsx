'use strict'

import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

import { makeCampus } from '../store'


class AddCampus extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    const campus = { name: event.target.name.value }

    this.props.makeCampus(campus)
      .then(campus => this.props.history.push(`/campuses/${campus.id}`))
      .catch(console.error)
  }

  render() {
    return (
      <div>
        <h1>Add A Campus</h1><br />
        <form onSubmit={ this.handleSubmit }>
          <p className='title'>Name<input
            type='text'
            name='name'
          /></p>
          <button type='submit' className='nav-option button'>Add Campus</button>
        </form>
      </div>
    )
  }

}

const mapStateToProps = (store) => ({ campus: store.campus })

const mapDispatchToProps = (dispatch) => ({
  makeCampus: (campus) => dispatch(makeCampus(campus)),
})


export default connect(mapStateToProps, mapDispatchToProps)(AddCampus)
