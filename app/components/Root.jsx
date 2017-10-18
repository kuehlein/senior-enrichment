'use strict'

import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


const Root = ({ children }) => (
  <div>
    <Navbar />
    <div className='main'>
      { children }
    </div>
    <Footer />
  </div>
)

export default Root
