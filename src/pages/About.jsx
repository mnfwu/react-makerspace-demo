import React from 'react'
import Nav from '../components/Nav/Nav'
import { Icon } from '@iconify/react';

const About = () => {
    return(
        <div className="App">
            <Nav />
            <h2>hello About</h2>
            <Icon icon="eos-icons:rotating-gear" />
        </div>
    )
}

export default About