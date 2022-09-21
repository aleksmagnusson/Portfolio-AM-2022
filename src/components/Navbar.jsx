import React from 'react'
import { NavLink } from 'react-router-dom'
import '../components/navbar.css'

function Navbar() {
    return (
        <nav className='navbar'>
            <div className="nav-container">
                <NavLink exact to="/homepage" className="nav-logo"> Logotype </NavLink>
                <ul className='nav-menu'>
                    <li className='nav-item'>
                        <NavLink to="/homepage" activeClassName="active" className="nav-links">
                            Home
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/contact" activeClassName="active" className="nav-links">
                            Contact
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/about" activeClassName="active" className="nav-links">
                            About
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/showcase" activeClassName="active" className="nav-links">
                            Showcase
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar