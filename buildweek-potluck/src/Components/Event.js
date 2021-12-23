// All imports here
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import '../App.css';
import styled from 'styled-components';

const EditStyles = styled.div`
    background-color: #F9F1D9;
    color: #858d3C;
    border: 3px solid #F8B12C;
    padding: 1%;
    margin-bottom: 1%;
    margin-right: 1%;
    h2{
        margin-bottom: 2.5rem;
        font-size: 2.5rem;
    }

    .event div{
        font-size: 1.8rem;
        line-height: 2.2rem;
    }

    .event .info *{
        display: flex;
        justify-content: space-between;
    }
    
    .event .info{
        margin: 20px 0;
        border: 1px solid #F8B12C;
        padding 5px 0;
        font-size: 2rem;
    }

    .event h4{
        padding: 0 20px;
    }

    .food div h4{
        font-weight: bold;
        font-size: 2rem;
        margin: 1rem 0;
    }

    .submitSection{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 1.5rem;
    }


    .submitSection h4{
        font-weight: bold;
        font-size: 2rem;
    }
`

// start Event component
export default function Event(props) {
    const  [eventData, setEventData] = useState('') 
    const { id } = useParams();
    const { push } = useHistory();

    // useEffect(() => {
    //     axios.get()
    //         .then(res => console.log(res))
    //         .catch(err => console.log(err))
    // }, []);

    return (
        <EditStyles>
        <div className='event'>
            <h2>{props.mockData.name}</h2>
            <img src={props.mockData.img} alt=''></img>
                <div class='infoContainer'>
                    <div className='info'>
                        <h4><span>Time:</span> <span>{props.mockData.time}</span></h4>
                        <h4><span>Date:</span> <span>{props.mockData.date}</span></h4>
                        <h4><span>Location:</span> <span>{props.mockData.location}</span></h4>
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
                    <div className='submitSection'>
                        <label><h4>Attending?</h4>
                        <input type='checkbox' onClick={() => (!props.mockData.confirmed)}></input>
                        </label>
                    </div>
                </div>
        </div>
        </EditStyles>
    )
}