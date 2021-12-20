import React from 'react';
import mockData from '../mockData';
import '../App.css';


export default function Event(props) {
    const { mockData } = props;

    return (
        <div className='event'>
            <h2>Hello?</h2>
            <img src={props.img} />
            <p>{props.date}</p>
            <p>{props.time}</p>
            <p>{props.location}</p>
            <div className='selectedFood'>
                {props.selectedFood}
            </div>
            <div className='unselectedFood'>
                {props.unselectedFood}
            </div>
            <p>Will you be joining us?</p>
            <button>Confirm</button>
        </div>
    )
}




















//     date: '11/11/2022',
//     time: '7:00pm',
//     location: '1717 Doofus drive',
//     selectedFood: [],
//     unselectedFood: [],
//     confirmed: false