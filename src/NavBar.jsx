import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <nav>
    <Link id='link' to="/home">Home</Link>
    <Link id='link' to="/view">View</Link>
    </nav>
    </>
  )
}

export default NavBar