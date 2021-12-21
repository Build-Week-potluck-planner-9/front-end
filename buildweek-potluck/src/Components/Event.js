// All imports here
import React, { useState } from 'react';
import '../App.css';

// start Event component
export default function Event(props) {
    const [foodWeHave, setFoodWeHave] = useState(props.mockData.selectedFood);
    const [needed] = useState(props.mockData.unselectedFood);


    const addItem = () => {
    }

    return (
        <div className='event'>
            <h2>{props.mockData.name}</h2>
            <img src={props.mockData.img}></img>
                <div className='info'>
                    <h4>Time: <p>{props.mockData.time}</p></h4>
                    <h4>Date: <p>{props.mockData.date}</p></h4>
                    <h4>Location: <p>{props.mockData.location}</p></h4>
                </div>
                <div className='items'>
                    <div className='have'>
                        <h4>Food already here: </h4>
                        {foodWeHave.map(item => {
                            return <p>{item}</p>
                        })}
                    </div>
                    <div className='needed'>
                        <h4>Food we need: </h4>
                        {needed.map(item => {
                            return <button onClick={addItem}>{item}</button>
                        })}
                    </div>
                </div>
        </div>
    )
}