import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const LogoutStyle = styled.div`

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

export default function Logout() {
	const { push } = useHistory();

	useEffect(() => {
		const token = localStorage.getItem('token');

		axiosWithAuth()
			.post(
				'/logout',
				{},
				{
					headers: {
						Authorization: token
					}
				}
			)
			.then((res) => {
				localStorage.removeItem('token');
				push('/login');
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<LogoutStyle>
		<section className='logout'>
			<h1>You have been logged out.</h1>
			<Link className='links' to='/login'>Return to Login</Link>
		</section>
		</LogoutStyle>
	);
}
