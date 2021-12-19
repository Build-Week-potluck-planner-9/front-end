import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className='header'>
            <nav>
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/logout'>Logout</Link>
            <Link to='/dashboard'>Dashboard</Link>
            </nav>
        </div>
    )
}
