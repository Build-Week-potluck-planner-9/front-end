import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className='header'>
            <nav>
            <Link className='links' to='/event-page'>Potlucks!</Link>
            <Link className='links' to='/login'>Login</Link>
            <Link className='links' to='/logout'>Logout</Link>
            </nav>
        </div>
    )
}
