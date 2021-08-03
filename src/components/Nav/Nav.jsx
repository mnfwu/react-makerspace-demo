import React from 'react'
import './Nav.css'

const Nav = () => {
    return (
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/events">Events</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>
    )
}

export default Nav