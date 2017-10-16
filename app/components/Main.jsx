'use strict'

import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Home from './Home'
import Students from './Students'
import SingleStudent from './SingleStudent'
import Campuses from './Campuses'
import SingleCampuses from './SingleCampus'


export default class Main extends Component {
  constructor() {
    super()
  }

  // componentDidMount () {
  // const myThunk = fetchStudents()
  // store.dispatch(myThunk)
  // }

  //look into auther Root implementation for here
  render() {
    return (
      <Root>
        <div>we got some students, and we got some campuses</div>
        <Switch>
          <Route path="/" component={Home} />
          <Route exact path="/api/students" component={Students} />
          <Route path="/api/students/:studentId" component={SingleStudent} />
          <Route exact path="/api/campuses" component={Campuses} />
          <Route path="/api/campuses/:campusId" component={SingleCampus} />
          <Redirect to="/" />
        </Switch>
      </Root>
    )
  }

}
