'use strict'

import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Table from './Table'
import { fetchCampus, deleteCampus } from '../store'


class SingleCampus extends Component {

  componentDidMount () {
    this.props.fetchCampus(+this.props.match.params.campusId)
  }

  handleClick (event) {
    // axios.delete(`/api/campuses/${this.state.campus.id}`)
    //   .then(res => res.data)
    //   .then(() => this.props.history.push(`/`))
    //   .catch(console.error)

    this.props.deleteCampus(event.target.value)
      .then(() => this.props.history.push(`/`))
  }

  render () {
    const campus = this.props.campus
    const students = campus.students

    return (
      <div>
        <h4 className='title'>Campus Name:</h4><div>{ campus.name }</div>
        <h4 className='title'>Students Attending:</h4>
        {
          students
            ? <div>{ <Table students={ students } /> }</div>
            : <div>Campus has no students</div>
        }
        <button
          className='button'
          onClick={ () => this.handleClick(campus) }
        >Delete Campus</button>
        <button
          className='button'
        ><Link to={`/campuses/${this.props.campus.id}/edit`}>Edit Campus</Link></button>
      </div>
    )
  }

}

const mapStateToProps = (store) => ({ campus: store.campus })

const mapDispatchToProps = (dispatch) => ({
  fetchCampus: (campusId) => dispatch(fetchCampus(campusId)),
  deleteCampus: (campus) => dispatch(deleteCampus(campus))
})


export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus)
