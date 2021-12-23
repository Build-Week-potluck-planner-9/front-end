import React from 'react';

export default function EventItem(props) {
    const { img, 
            id,
            name,
            date,
            time,
            location,
            selectedFood,
            unselectedFood,        
    } = props.mockData;

    return (
        <div key={id} className='event-item'>
            {/* <h2>{name}</h2>
            <img src={img} alt=''></img>
            <h4>{time}</h4>
            <h4>{location}</h4>
            <h4>{date}</h4>

            <p>Food we have: {selectedFood.join('. ')}</p>
            <p>Food we need: {unselectedFood.join('. ')}</p> */}
        </div>
    )
}
