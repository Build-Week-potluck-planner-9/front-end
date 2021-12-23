// All imports here
import React, { useEffect, useState } from 'react'
import EventItem from './EventItem';
import { Link, useParams } from 'react-router-dom'
import mockData from '../mockData';
import axios from 'axios';

// Start EventPage component
export default function EventPage(props) {
    const [events, setEvents] = useState([])

    // useEffect(() => {
    //     axios.get()
    //         .then(res => console.log(res))
    //         .catch(err => console.log(err))
    // }, []);

    return (
        <>
            <div className='event-page'>
                {mockData.map(item => (<EventItem key={item.id} mockData={mockData} />))}
            </div>
            <Link to='/event-page/create-potluck'>Create new Potluck</Link>
        </>      
    )
}
