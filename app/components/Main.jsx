'use strict'

import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Root from './Root'
import Home from './Home'
import Students from './Students'
import SingleStudent from './SingleStudent'
import Campuses from './Campuses'
import SingleCampus from './SingleCampus'


export default class Main extends Component {
  constructor() {
    super()
  }

  // componentDidMount () {
  // const myThunk = fetchStudents()
  // store.dispatch(myThunk)
  // }

  render() {
    return (
      <Root>
        <div className='carosel'>we got some students, and we got some campuses</div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/students' component={Students} />
          <Route path='/students/:studentId' component={SingleStudent} />
          <Route exact path='/campuses' component={Campuses} />
          <Route path='/campuses/:campusId' component={SingleCampus} />
          <Redirect to='/' />
        </Switch>
      </Root>
    )
  }

}
