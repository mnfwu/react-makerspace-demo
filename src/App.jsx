import React, { useState } from 'react'
import './App.css'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home'
import Events from './pages/Events'
import Nav from './components/Nav/Nav.jsx'

function App() {
  const [count, setCount] = useState(10);

  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/events" component={Events} />
    </Router>  
  )
}

export default App
