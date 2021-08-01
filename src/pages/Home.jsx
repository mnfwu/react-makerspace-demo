import React from 'react'

import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'
import Scroller from '../components/Scroller/Scroller.jsx'
import EventSection from '../components/EventSection/EventSection'

const Home = () => {
    return(
        <div className="App">
            <Header/>
            <Scroller />
            <EventSection />
            <Footer />
        </div>
    )
}

export default Home
