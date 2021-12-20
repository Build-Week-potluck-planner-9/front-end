// All imports here
import React from 'react';
import mockData from '../mockData';
import '../App.css';

// start Event component
export default function Event(props) {
    
    const { mockData } = props;
    return (
        <div className='event'>
            <div>
            <h2>{props.mockData.name}</h2>
            </div>
            <img src={props.mockData.img} alt='food image'></img>
            <p>{props.mockData.date}</p>
            <p>{props.mockData.time}</p>
            <p>{props.mockData.location}</p>
            <div className='selectedFood'>
                {props.mockData.selectedFood}
            </div>
            <div className='unselectedFood'>
                {props.mockData.unselectedFood}
            </div>
            <p>Will you be joining us?</p>
            <button>Confirm</button>
        </div>
    )
}