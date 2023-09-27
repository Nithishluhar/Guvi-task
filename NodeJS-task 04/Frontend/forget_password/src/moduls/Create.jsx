import React from 'react'
import { Link } from 'react-router-dom'


function Create() {
  return (
    <div className="d-flex justify-content-center align-items-center  vh-100">
            <Link to="/register" className="btn btn-danger">
  Register for Email
  </Link>
    </div>
  )
}

export default Create