'use strict'

import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Root from './Root'
import Home from './Home'
import AllStudents from './AllStudents'
import SingleStudent from './SingleStudent'
import AllCampuses from './AllCampuses'
import SingleCampus from './SingleCampus'
import AddStudent from './AddStudent'
import AddCampus from './AddCampus'


const Main = () => (
  <Root>
    <Switch>
      <Route exact path='/' component={ Home }/>
      <Route exact path='/students' component={ AllStudents }/>
      <Route exact path='/students/add' component={ AddStudent }/>
      <Route exact path='/students/:studentId' component={ SingleStudent }/>
      <Route exact path='/campuses' component={ AllCampuses }/>
      <Route exact path='/campuses/add' component={ AddCampus }/>
      <Route exact path='/campuses/:campusId' component={ SingleCampus }/>
      <Redirect to='/'/>
    </Switch>
  </Root>
)


export default Main

