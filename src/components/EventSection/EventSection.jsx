import React from 'react'
import './Events.css'
import EventCircle from './EventCircle'
import events from '../../data/events.js'

console.log(events)

const EventSection = () => {
    return (
        <div>
            <h4 className="event-title ylw-txt">Upcoming Events</h4>
            <div className="grid-container">
                <div className="event-grid">
                    {events.map((event, index) => (
                    <EventCircle key={index} month={event.month} day={event.day} class={event.color} id={event.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default EventSection