'use strict'

import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => (
  <header>
    <Link className='logo' to='/'><img src='apple-logo.png'/></Link>
    <div className='nav-title'>E d u c a t i o n___N a t i o n___</div>
    <nav className='nav-option'>
        <div>
          <NavLink to='/students'>Students</NavLink>
        </div>
        <div>
          <NavLink to='/campuses'>Locations</NavLink>
        </div>
    </nav>
  </header>
)


export default Navbar
