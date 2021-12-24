// All imports here
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const EventStyle = styled.div`
    height: 100%;
    width: 100%;
    background-color: #F9F1D9;
`

// start Event component
const Event = (props) => {
   const {event, setEvent} = useState('');
   const { id } = useParams();


   useEffect(() => {
        axios.get(`https://potluckbw.herokuapp.com/api/auth/${id}`)
            .then(res => {
                setEvent(res.data)
            })
            .catch(err => console.log(err))
    }, [id])

   return(
       <EventStyle>
        <div key={event.id} className="event">
            <h2>{event.name}</h2>
            <img src={event.img} alt=''></img>
                <div className='infoContainer'>
                    <div className='info'>
                        <h4>{event.time}</h4>
                        <h4>{event.date}</h4>
                        <h4>{event.location}</h4>
                    </div>
                </div>
            <div className="foodList">
                <h3>Here is what we have:</h3>
                <p>{event.selectedFood}</p>
                <br />
                <h3>Here is what we need:</h3>
                <p>{event.unselectedFood}</p>
            </div>
        </div>
        </EventStyle>
   )
}

export default Event;