import React, { useState } from 'react'
import './App.css'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Scroller from './components/Scroller/Scroller.jsx'
import EventSection from './components/EventSection/EventSection'
// import Nav from './components/Header/Nav/Nav.jsx'

function App() {
  const [count, setCount] = useState(10);
  const fName = "Tina";
  const lName = "Shanlooloozozozoz";

  return (
    <div className="App">
        <Header/>
        <Scroller />
        <EventSection />
        <Footer />
        {/* <Footer /> */}

          {/* <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button> */}

          {/* <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>  */}

    </div>
  )
}

export default App
