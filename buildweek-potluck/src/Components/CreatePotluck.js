import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const StyledForm = styled.div`
    background-color: #F9F1D9;
    min-height: 100vh;
    display: flex;
    justify-content: center;

    .create-potluck{
        width: 80%
    }

    h2{
        font-weight: bold;
        font-size: 4rem;
        margin-top: 2rem;
    }

    h4{
        font-weight: bold;
        font-size: 3rem;
    }
    
    form{
        width: 100%
    }

    button{
        font-family: 'Gloria Hallelujah', cursive;
        margin: 0 2rem;
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
        <StyledForm>
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
        </StyledForm>
    )
}