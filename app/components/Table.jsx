'use strict'

import React from 'react'
import { Link } from 'react-router-dom'


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
          <th>Student</th>
          <th>Email</th>
        </tr>
        { students ? students : <tr>Directory Empty</tr> }
      </tbody>
    </table>
  )
}


export default Table
