import React from 'react'
import { Link } from 'react-router-dom';
import './Nav.css'
// import './NavMobile.css'
import NavMobile from './NavMobile';

const Nav = () => {


    return (
        <nav>
            <ul className="menu-desktop">
                <li className="nav-link-desktop"><Link to='/'>Home</Link></li>
                <li className="nav-link-desktop"><Link to='/events'>Events</Link></li>
                <li className="nav-link-desktop"><Link to='/info'>Info</Link></li>               
                <li className="nav-link-desktop"><Link to='/projects'>Projects</Link></li>
            </ul>
            <NavMobile />
        </nav>
    )
}

export default Nav