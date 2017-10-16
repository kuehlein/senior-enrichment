'use strict'

import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

export default class Main extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Navbar/>
        <main>
          <div>we got some students, and we got some campuses</div>
          <Switch>
          <Route path="/api" component={null} />
            <Route exact path="/api/students" component={null} />
            <Route path="/api/students/:studentId" component={null} />
            <Route exact path="/api/campuses" component={null} />
            <Route path="/api/campuses/:campusId" component={null} />
            <Redirect to="/api" />
          </Switch>
        </main>
      </div>
    )
  }

}
