// All imports here
import React from 'react'
import Event from './Event'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
import EventItem from './EventItem';

const EventPageStyles = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
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
    const { events } = props;

    return (
        <EventPageStyles>
        <>
        <div className='eventPageContainer'>
            <div className='event-page'>
                {events.map(event => <EventItem key={event.id} event={event} />)}
            </div>
            <div className='create-btn'>
                        <Link className='links' to='/create-potluck'>Create new Potluck</Link>
            </div>
        </div>
        </>
        </EventPageStyles>
    )
}
