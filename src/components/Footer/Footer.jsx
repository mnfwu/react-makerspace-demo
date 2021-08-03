import React from 'react'
import Newsletter from './Newsletter';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    const year = new Date().getFullYear();
    
    return (
        <footer className="ftr">
                <div className="ftr-info">
                    <h4 className="ylw-txt ftr-h4">HOUSE OF CIRCLES</h4>
                    <Link to="/" className="ylw-txt">Home</Link>
                    <Link to="/projects" className="ylw-txt">Projects</Link>
                    <Link to="/events" className="ylw-txt">Events</Link>
                    <Link to="/about" className="ylw-txt">About</Link>
                    <p className="blu-txt copyright">House of Circles © {year}</p>
                </div>
                <Newsletter />
        </footer>
    )
}

export default Footer
