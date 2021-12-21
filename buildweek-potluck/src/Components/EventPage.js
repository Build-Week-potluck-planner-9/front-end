// All imports here
import React from 'react'
import Event from './Event'
import mockData from '../mockData'
import { Link } from 'react-router-dom'

// Start EventPage component
export default function EventPage() {

    return (
        <div className='event-page'>
            {/* Map through the mockData to display each event */}
                {mockData.map(item => {
                    return <Event key={item.id} mockData={item}/>
                })}
                <div className='create-btn'>
                    <Link to='/create-potluck'>Create new Potluck</Link>
                </div>
        </div>
    )
}
