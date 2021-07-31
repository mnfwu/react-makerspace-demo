import React from 'react'
import './Newsletter.css'
import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'

const Newsletter = () => {
    return (
        <div className="nl-container">
            <h4 class="nl-h4 ylw-txt">Want Updates?</h4>
            <div className="input-flex">
            <input type="text" placeholder="Your email" className="email-input" /><button className="submit-btn">KEEP ME POSTED</button>
            </div>
            <div className="input-flex">
            <input type="checkbox" className="checkbox" />
            <p className="blu-txt">Receive news about House of Cards?</p>
            </div>


            <div className="icons">
                <FaInstagram className="icon" />
                <FaTwitter className="icon" />
                <FaFacebookF className="icon" />
            </div>
        </div>
    )
}

export default Newsletter