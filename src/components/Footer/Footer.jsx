import React from 'react'
import Newsletter from './Newsletter';
import './Footer.css'

const Footer = () => {
    const year = new Date().getFullYear();
    
    return (
        <footer className="ftr">
                <div className="ftr-info">
                    <h4 className="ylw-txt ftr-h4">HOUSE OF CIRCLES</h4>
                    <a href="#" className="ylw-txt">Info</a>
                    <a href="#" className="ylw-txt">Projects</a>
                    <a href="#" className="ylw-txt">Events</a>
                    <a href="#" className="ylw-txt">Contact</a>
                    <p className="blu-txt copyright">House of Circles © {year}</p>
                </div>
                <Newsletter />
        </footer>
    )
}

export default Footer
