// All imports here
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

// start Event component
export default function Event(props) {
    return (
        <div className='event'>
            <h2>{props.mockData.name}</h2>
            <img src={props.mockData.img} alt=''></img>
                <div className='info'>
                    <h4>Time: <p>{props.mockData.time}</p></h4>
                    <h4>Date: <p>{props.mockData.date}</p></h4>
                    <h4>Location: <p>{props.mockData.location}</p></h4>
                </div>
                <div className='food'>
                    <div className='whatWeHave'>
                        <h4>Here's what we already have:</h4>
                        {props.mockData.selectedFood.map(item => (<p key={props.mockData.id}>{item}</p>))}
                    </div>
                    <div className='whatWeNeed'>
                        <h4>Here's what we still need:</h4>
                        {props.mockData.unselectedFood.map(item => (<p key={item.id}>{item}</p>))}
                    </div>
                </div>
                <label><h4>Attending?</h4>
                <input type='checkbox' onClick={() => (!props.mockData.confirmed)}></input>
                </label>
        </div>
    )
}