// All imports here
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import '../App.css';

// start Event component
export default function Event(props) {
    const  [eventData, setEventData] = useState('') 
    const { id } = useParams();
    const { push } = useHistory();

    // useEffect(() => {
    //     axios.get()
    //         .then(res => console.log(res))
    //         .catch(err => console.log(err))
    // }, []);

    return (
        <div className='event'>
            {/* <h2>{name}</h2>
            <img src={img} alt=''></img>
            <h4>{time}</h4>
            <h4>{location}</h4>
            <h4>{date}</h4>

            <p>Food we have: {selectedFood.join('. ')}</p>
            <p>Food we need: {unselectedFood.join('. ')}</p> */}
            <div>
                <Link to={`/event`} >View event</Link>
            </div>
        </div>
    )
}