import React from 'react'
import './Events.css'

const EventCircle = (props) => {
    return (
        <div className="event-circle">
            <div className={props.class}>
                <p className="event-p">{props.month}</p>
                <h4 className="event-h4">{props.day}</h4>
            </div>
        </div>
    )
}

export default EventCircle