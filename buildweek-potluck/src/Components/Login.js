import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

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
		axios
			.post('http://localhost:9000/api/login', credentials)
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
		<section className='login'>
			<div className='loginWrap'>
				<div className='loginTitle'>
					<h2>Enter username and Password to continue</h2>
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
	);
}
