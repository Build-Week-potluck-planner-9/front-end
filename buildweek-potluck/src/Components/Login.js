import React, { useState } from 'react';
import axiosWithAuth from "../utils/axiosWithAuth";
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const StyledLogin = styled.div`
    color: #858D3C;
    background-color: #F9F1D9;
    text-align: center;
	min-height: 100%;

    .login {
        padding: 10%;    
    }
    .loginWrap {
		padding: 10% 5% 10% 5%;
    }
    .loginTitle{
        padding-bottom: 10%;
    }
    h5{
        padding: 5%;
        text-align: center;
    }
    h2{
        font-size: 50px;
        text-align: center;
    }
    button{
        margin-top: 15%;
        background-color: #9D221E;
		font-family: 'Gloria Hallelujah', cursive;
    }

    button:hover {
        background-color: #ED732E;
    }

    label h5{
        text-align: center;
    }
`

export default function Login() {
	const { push } = useHistory();

	const initialValues = {
		username: '',
		password: ''
	};

	const [errorMessage, setErrorMessage] = useState('');
	const [credentials, setCredentials] = useState(initialValues);

	const handleChange = (e) => {
		// console.log(e.target.value);
		setCredentials({
			...credentials,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		axiosWithAuth().post("/login", credentials)
			.then((res) => {
				localStorage.setItem('token', res.data.token);
				push('/home');
				setErrorMessage('');
			})
			.catch((err) => {
				console.log(err.response);
				setErrorMessage(err.response.data.error);
				setCredentials(initialValues);
			});
	};

	return (
		<StyledLogin >
		<section className='login'>
			<div className='loginWrap'>
				<div className='loginTitle'>
					<h2>Potluck Login</h2>
				</div>
				<form onSubmit={handleSubmit}>
					<label>
						<h5>Username:</h5>
						<input id='username' type='text' name='username' value={credentials.username} placeholder='hotmale@hotmail' onChange={handleChange} />
					</label>
					<label>
						<h5>Password:</h5>
						<input id='password' type='password' name='password' value={credentials.password} onChange={handleChange} />
					</label>
					{errorMessage && <p id='errorMessage'>{errorMessage}</p>}
					<div>
						<button>Submit</button>
					</div>
				</form>
			</div>
		</section>
		</StyledLogin>
	);
}
