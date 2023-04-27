import React from 'react'
import { NavLink } from 'react-router-dom'
const Error = () => {
  return (
     <>
       <div className="ser-main">
        <div className="error-404">
            <div className="error-sect">
                <h1>404 Error</h1>
               <NavLink to="/"><button>Back to home</button></NavLink>
            </div>
        </div>
        </div>
     </>
  )
}

export default Error