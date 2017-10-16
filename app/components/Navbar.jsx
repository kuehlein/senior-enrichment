'use strict'

import React from 'react'


const Navbar = () => (
  <header>
    <div className="logo">
      <img alt="logo" src="images/logo.png" />
    </div>
    <nav>
      <div>Navstuff here :)</div>
      <div className='nav-option'>
        <a href='#'>Students</a>
      </div>
      <div className='nav-option'>
        <a href='#'>Locations</a>
      </div>
    </nav>
  </header>
)


export default Navbar
