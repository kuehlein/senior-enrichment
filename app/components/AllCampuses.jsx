'use strict'

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'

import { fetchCampuses } from '../store'


class AllCampuses extends Component {

  componentDidMount() {
    this.props.fetchCampuses()
  }

  render() {
    const campuses = this.props.campuses.map(campus => (
      <div key={campus.id} >
        <div><Link to={`/campuses/${campus.id}`}>{campus.name}</Link></div>
      </div>
    ))

    return (
      <div>
        <h1>Our Locations</h1>
        <div>
          {campuses}
        </div>
        <button className='button'><Link to='/campuses/add'>Add A Campus</Link></button>
      </div>
    )
  }

}

const mapStateToProps = (store) => ({ campuses: store.allCampuses })

const mapDispatchToProps = (dispatch) => ({
  fetchCampuses: () => dispatch(fetchCampuses())
})


export default connect(mapStateToProps, mapDispatchToProps)(AllCampuses)
