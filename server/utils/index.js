'use strict'

// used for error handling in routes
const err = (status, message) => {
  let error = new Error(message)
  error.status = status
  return error
}


module.exports = err
