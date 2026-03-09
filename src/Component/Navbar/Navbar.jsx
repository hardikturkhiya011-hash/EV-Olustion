import React from 'react'
import '../Navbar/Navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
        <div className='nav-logo'>EV-olustion</div>
        <ul className='nav-menu'>
            <li>Home</li>
            <li>Explore</li>
            <li>About</li>
            <li className='nav-con'>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar