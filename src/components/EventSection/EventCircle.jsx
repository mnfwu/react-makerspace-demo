import React from 'react'
import { Link } from 'react-router-dom';
import './Events.css'

const EventCircle = (props) => {
    return (
        <Link to={`/event/${props.id}`} className="event-circle-link">
            <div className="event-circle">
                <div className={props.class}>
                    <p className="event-p">{props.month}</p>
                    <h4 className="event-h4">{props.day}</h4>
                </div>
            </div>
        </Link>
    )
}

export default EventCircle