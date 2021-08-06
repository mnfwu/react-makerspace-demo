import React from 'react'
import Nav from '../components/Nav/Nav'
import EventCircle from '../components/EventSection/EventCircle'
import events from '../data/events'

const Events = () => {
    return(
        <div className="App grn-bg">
            <Nav className="" />
            <h2>Upcoming Events</h2>
                <div className="grn-bg two-column-grid">
                    {events.map((event, index) => (
                    <div class="event-card">
                        <EventCircle key={index} month={event.month} day={event.day} class={event.color} id={event.id} />
                        <div className="event-card-inner">
                            <h3 className="mb1">Some information about the event</h3>
                            <p>Additional information about this event will go here since this is the space for additional event info don'tcha know.</p>
                        </div>
                    </div>
                    ))}
                </div>
        </div>
    )
}

export default Events