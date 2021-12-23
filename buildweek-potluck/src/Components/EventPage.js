// All imports here
import React from 'react'
import Event from './Event'
import mockData from '../mockData'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const EventPageStyles = styled.div`
    background-color: #F9F1D9;
    padding: 1%;
`

// Start EventPage component
export default function EventPage(props) {
    const [events, setEvents] = useState([])

    // useEffect(() => {
    //     axios.get()
    //         .then(res => console.log(res))
    //         .catch(err => console.log(err))
    // }, []);

    return (
        <EventPageStyles>
        <>
        <div className='event-page'>
            {/* Map through the mockData to display each event */}
                {mockData.map(item => {
                    return <Event key={item.id} mockData={item}/>
                })}
        </div>
                <div className='create-btn'>
                    <Link className='links' to='/event-page/create-potluck'>Create new Potluck</Link>
                </div>
        </>
        </EventPageStyles>
    )
}
