import React, { useState } from 'react'
import './App.css'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Events from './pages/Events'
import Event from './pages/Event'
import About from './pages/About'
import Projects from './pages/Projects'

function App() {
  const [count, setCount] = useState(10);

  return (
    
    <Router>
      <Route exact path="/" exact component={Home} />
      <Route exact path="/events" component={Events} />
      <Route exact path='/event/:id' component={Event} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/about" component={About} />
    </Router>  
  )
}

export default App
