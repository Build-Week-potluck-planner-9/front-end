// All imports here
import React from 'react'
import Event from './Event'
import mockData from '../mockData'

// Start EventPage component
export default function EventPage() {

    return (
        <div className='event-page'>
            {/* Map through the mockData to display each event */}
                {mockData.map(item => {
                    return <Event key={item.id} mockData={item}/>
                })}
        </div>
    )
}
