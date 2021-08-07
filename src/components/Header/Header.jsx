import React from 'react'
import Nav from '../Nav/Nav'
import './Header.css'
import { Icon } from '@iconify/react';

const Header = () => {
    return (
        <header>
            <Nav />
            <div className="top">
                
                <h1 className="h1">DOT SPACE</h1>
                <div className="circle-container">
                    <div className="circle-large grn-bg"></div>
                    <div className="circle-large"><Icon icon="eos-icons:rotating-gear" className="gear ylw-txt" /></div>
                    <div className="circle-large rd-bg"></div>
                </div>
            </div>
            <div className="bottom">
                <h4 className="bottom-text">Dot space is a community-run makerspace in Shanghai providing local creative with facility rental, workshops and exhibition space.</h4>
            </div>
        </header>
    )
}

export default Header