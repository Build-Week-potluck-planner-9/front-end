// All imports here
import React, { useState } from 'react';
import '../App.css';

// start Event component
export default function Event(props) {
    return (
        <div className='event'>
            <img src={props.mockData.img}></img>
            <div>
                <h2>{props.mockData.name}</h2>
                <h4>Time: <p>{props.mockData.time}</p></h4>
                <h4>Date: <p>{props.mockData.date}</p></h4>
                <h4>Location: <p>{props.mockData.location}</p></h4>
            </div>
        </div>
    )
}