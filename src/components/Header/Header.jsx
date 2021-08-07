import React from 'react'
import Nav from '../Nav/Nav'
import './Header.css'
import { Icon } from '@iconify/react';

const Header = () => {
    return (
        <header>
            <Nav />
            <div className="top">
                
                <h1 className="h1">HOUSE OF CIRCLES</h1>
                <div className="circle-container">
                    <div className="circle-large grn-bg"></div>
                    <div className="circle-large"><Icon icon="eos-icons:rotating-gear" className="gear ylw-txt" /></div>
                    <div className="circle-large rd-bg"></div>
                </div>
            </div>
            <div className="bottom">
                <h4 className="bottom-text">House of Circles is a gallery space in Berlin exploring the history of polka dots in art, fashion, music, and culture.</h4>
            </div>
        </header>
    )
}

export default Header