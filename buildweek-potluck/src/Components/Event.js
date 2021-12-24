// All imports here
import React from 'react';
import '../App.css';

// start Event component
export default function Event(props) {
    const {events} = props;

    return(
        <div className="event">
            <h2>{events.name}</h2>
            <img src={events.img} alt=''></img>
            <div className='infoContainer'>
                <div className='info'>
                    <h4>{events.time}</h4>
                    <h4>{events.date}</h4>
                    <h4>{events.location}</h4>
                </div>
            </div>
            {/* <div className="foodList">
                <h3>Here is what we have:</h3>
                <p>{selectedFood}</p>
                <br />
                <h3>Here is what we need:</h3>
                <p>{unselectedFood}</p>
            </div> */}
        </div>
    )

}