import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const CreatePotluckStyles = styled.div`
    background-color: #F9F1D9;
    color: #858D3C;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;

    
    .create-potluck{
        border: solid 2px orange;
        padding: 4%;
    }

    h2{
        font-size: 40px;
        padding-bottom: 2%;
    }

    label{
        padding-bottom: 6%;
        padding-top: 6%;
    }

    .links{
        margin: 1%;
    }

    button{
        margin-top: 15%;
        background-color: #859D3C;
    }


    button:hover{
        background-color: #F8B12C;
    }
`



const initialData = {
        img: '',
        id: Math.floor(Math.random() * 5000),
        name: '',
        date: '',
        time: '',
        location: '',
        selectedFood: [],
        unselectedFood: [],
        confirmed: false
}

export default function CreatePotluck() {
    const [data, setData] = useState(initialData);
    const { push } = useHistory();

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <CreatePotluckStyles>   
        <div className='create-potluck'>
            <h2>Create a new Potluck</h2>
            <form>
                <label>
                    <h4>Event Name:</h4>
                    <input
                        type='text'
                        name='event-name'
                        id='event-name'
                        onChange={handleChange} 
                    />
                </label>
                <label>
                    <h4>Date:</h4>
                    <input
                        type='text'
                        name='date'
                        id='date'
                        onChange={handleChange} 
                    />
                </label>
                <label>
                    <h4>Time:</h4>
                    <input
                        type='text'
                        name='time'
                        id='time'
                        onChange={handleChange} 
                    />
                </label>
                <label>
                    <h4>Location:</h4>
                    <input
                        type='text'
                        name='time'
                        id='time'
                        onChange={handleChange} 
                    />
                </label>
            </form>
            <div>
                    <button className='links' onClick={handleSubmit}>Create</button>
                    <button className='links' onClick={() => { push('/event-page') }}>Cancel</button>
                </div>
        </div>
        </CreatePotluckStyles> 
    )
}