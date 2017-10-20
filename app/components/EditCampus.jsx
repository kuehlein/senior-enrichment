'use strict'

import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

import { editCampus } from '../store'


class EditCampus extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    const name = event.target.name.value
    const campus = { id: this.props.match.params.campusId }
    if (name) campus.name = name

    this.props.editCampus(campus)
    .then(campus => this.props.history.push(`/campuses/${campus.id}`))
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
          /></p>
          <button type='submit' className='nav-option button'>Edit Campus</button>
        </form>
      </div>
    )
  }

}

const mapStateToProps = (store) => ({ campus: store.campus })

const mapDispatchToProps = (dispatch) => ({
  editCampus: (campus) => dispatch(editCampus(campus)),
})


export default connect(mapStateToProps, mapDispatchToProps)(EditCampus)
