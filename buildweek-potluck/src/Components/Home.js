import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HomeStyles = styled.div`

    background-color: #F9F1D9;
    min-height: 100%;
    color: #859D3C;

    h1 {
        font-size: 5em;
        padding-bottom: 5%;
        padding-top: 5%;
        font-weight: bold;
    }

    .links{
        text-decoration: underline #ED732E;
    }
`


export default function Home() {
    return (
        <HomeStyles>
        <section className='homepage'>
            <div className='homeWrap'>
                <h1>Welcome to PotluckPlanner!</h1>
                <div>
                    <Link className='links' to='/event-page'>View Potlucks!</Link>
                </div>
            </div>
        </section>
        </HomeStyles>
    )
}
