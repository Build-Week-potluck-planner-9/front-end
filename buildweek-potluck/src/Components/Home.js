import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <section className='homepage'>
            <div className='homeWrap'>
                <h1>Welcome to PotluckPlanner!</h1>
                <div>
                    <Link className='links' to='/event-page'>View Potlucks!</Link>
                </div>
            </div>
        </section>
    )
}
