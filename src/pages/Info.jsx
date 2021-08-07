import React from 'react'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'

const Info = () => {
    return(
        <div className="App">
            <Nav />
            <div className="blk-txt info-container">
                <h2 className="mb3">INFORMATION</h2>
                <p>Dot space is a community-run makerspace in Shanghai. Our memebrs share and manage a space that provides laser cutting, printmaking, 3D printing,  wood working, soldering and sewing facilities.</p>
                <p>We are located at 98 Suzhou Lu, Huangpu District. </p>
                <p>Check out events page for weekly workshops led by members and monthly open house tours.</p>
            </div>
            <Footer />
        </div>
    )
}

export default Info