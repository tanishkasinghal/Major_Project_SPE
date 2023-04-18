import React from 'react'
import NavBar from './NavBar'

export const Base = ({title="Welcome to our Website",children}) => {
  return (
    <div className="container-fluid p-0 m-0">
       <NavBar/>
        {children}
    </div>
  )
}
