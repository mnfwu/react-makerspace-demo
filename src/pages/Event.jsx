import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav/Nav'
import events from '../data/events';

const Event = ({match}) => {
    // const [data, setData] = useState([]);
    const eventIndex = match.params.id - 1;
    return(
        <div className="App">
            <Nav />
            <h2>hello Event {match.params.id}</h2>
            <h4>This event will be on {events[eventIndex].month} {events[eventIndex].day}</h4>
            <Link to='/'>Return Home</Link>
        </div>
    )
}

export default Event