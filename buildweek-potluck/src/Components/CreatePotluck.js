import React, { useState, useEffect } from 'react';


const initialData = {
        img: '',
        id: 1,
        name: 'Sandy\'s potluck',
        date: '11/11/2022',
        time: '7:00pm',
        location: '151234 Doofus drive',
        selectedFood: [],
        unselectedFood: [],
        confirmed: false
}

export default function CreatePotluck() {
    const [data, setData] = useState(initialData);

    useEffect(() => {

    }, []);

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
        <div className='create-potluck'>
            <h2>Create a new Potluck</h2>
            <form onSubmit={handleSubmit}>
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
                <div>
                    <button>Create</button>
                    <button>Cancel</button>
                </div>
            </form>
        </div>
    )
}