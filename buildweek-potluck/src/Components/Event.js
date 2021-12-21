// All imports here
import React, { useState } from 'react';
import mockData from '../mockData';
import '../App.css';

// start Event component
export default function Event(props) {
    const { mockData } = props;
    const haveList = props.mockData.selectedFood;
    const neededList = props.mockData.unselectedFood;
    const addItem = () => {
        {neededList.map(item => {
            return haveList.push(item)
        })}
        {neededList.map(item => {
            return neededList.pop(item)
        })}
    }

    return (
        <div className='event'>
            <div>
            <img src={props.mockData.img}></img>
            <h2>{props.mockData.name}</h2>
            </div>
            <p><strong>DATE: </strong>{props.mockData.date}</p>
            <p><strong>TIME: </strong>{props.mockData.time}</p>
            <p><strong>LOCATION: </strong>{props.mockData.location}</p>
            <div className='being-brought'>
                <h4>Item's we already have</h4>
                <span>{haveList}</span>
            </div>
            <div className='item-needed'>
                <h4>Item's we still need</h4>
                {neededList.map(item => {
                    return <p key={item.id}>{item} <button onClick={addItem}>Bring!</button></p>
                })}
            </div>
        </div>
    )
}