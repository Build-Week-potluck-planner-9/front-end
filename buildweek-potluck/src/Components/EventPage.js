// All imports here
import React from 'react'
import Event from './Event'
import mockData from '../mockData'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';

const EventPageStyles = styled.div`
    background-color: #F9F1D9;
    padding: 1%;

    .create-btn{
        margin: 2rem 0;
    }

    .create-btn .links{
        border: 3px solid #F8B12C;
    }
`

// Start EventPage component
export default function EventPage(props) {
    const [events, setEvents] = useState([])

    // useEffect(() => {
    //     axios.get()
    //         .then(res => console.log(res))
    //         .catch(err => console.log(err))
    // }, []);

    return (
        <EventPageStyles>
        <>
        <div className='eventPageContainer'>
            <div className='event-page'>
                {/* Map through the mockData to display each event */}
                    {mockData.map(item => {
                        return <Event key={item.id} mockData={item}/>
                    })}
            </div>
            <div className='create-btn'>
                        <Link className='links' to='/event-page/create-potluck'>Create new Potluck</Link>
            </div>
        </div>
        </>
        </EventPageStyles>
    )
}
