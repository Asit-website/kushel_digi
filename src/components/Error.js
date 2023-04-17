import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
     <>
        <div className="error-404">
            <div className="error-sect">
                <h1>404 Error !</h1>
                <button>Back to home</button>
            </div>
        </div>
     </>
  )
}

export default Error