'use strict'

import React from 'react'
import { Link } from 'react-router-dom'


// map over students and lay them out into a table
const Table = (props) => {
  const students = props.students.map(student => (
    <tr key={ student.id }>
      <td><Link to={`/students/${student.id}`}>{ student.name }</Link></td>
      <td>{ student.email }</td>
    </tr>
  ))

  return (
    <table>
      <tbody>
        <tr>
          <th className='title'>Student</th>
          <th className='title'>Email</th>
        </tr>
        { students ? students : <tr>Directory Empty</tr> }
      </tbody>
    </table>
  )
}

export default Table
