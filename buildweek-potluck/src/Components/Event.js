// All imports here
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import styled from 'styled-components';

const EditStyles = styled.div`
    background-color: #F9F1D9;
    color: #858d3C;
    border: 3px solid #F8B12C;
    padding: 1%;
    margin-bottom: 1%;
    margin-right: 1%;
`

// start Event component
export default function Event(props) {
    return (
        <EditStyles>
        <div className='event'>
            <h2>{props.mockData.name}</h2>
            <img src={props.mockData.img} alt=''></img>
                <div className='info'>
                    <h4>Time: {props.mockData.time}</h4>
                    <h4>Date: {props.mockData.date}</h4>
                    <h4>Location: {props.mockData.location}</h4>
                </div>
                <div className='food'>
                    <div className='whatWeHave'>
                        <h4>Here's what we already have:</h4>
                        {props.mockData.selectedFood.map(item => (<p key={props.mockData.id}>{item}</p>))}
                    </div>
                    <div className='whatWeNeed'>
                        <h4>Here's what we still need:</h4>
                        {props.mockData.unselectedFood.map(item => (<li key={item.id}>{item}</li>))}
                    </div>
                </div>
                <label><h4>Attending?</h4>
                <input type='checkbox' onClick={() => (!props.mockData.confirmed)}></input>
                </label>
        </div>
        </EditStyles>
    )
}