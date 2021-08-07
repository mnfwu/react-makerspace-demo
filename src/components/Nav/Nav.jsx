import React from 'react'
import { Link } from 'react-router-dom';
import './Nav.css'
// import './NavButton.css'
import NavButton from './NavButton';

const Nav = () => {


    return (
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/events'>Events</Link></li>
                <li><Link to='/info'>Info</Link></li>               
                <li><Link to='/projects'>Projects</Link></li>
            </ul>
            <NavButton />
        </nav>
    )
}

export default Nav