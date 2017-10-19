'use strict'

import React from 'react'
import Navbar from './Navbar'


// add navbar to each view
const Root = ({ children }) => (
  <div>
    <Navbar />
    <div className='main'>
      { children }
    </div>
  </div>
)

export default Root
