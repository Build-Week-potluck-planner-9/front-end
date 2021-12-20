import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// import { axiosWithAuth } from './' //once axios create function is  added in the util folder we will import here

export default function Logout() {
	const { push } = useHistory();

	// UNCOMMENT THIS OUT ONCE AXIOSWITHAUTH IS SET UP!!

	// useEffect(() => {
	// 	const token = localStorage.getItem('token');

	// 	axiosWithAuth()
	// 		.post(
	// 			'/logout',
	// 			{},
	// 			{
	// 				headers: {
	// 					Authorization: token
	// 				}
	// 			}
	// 		)
	// 		.then((res) => {
	// 			localStorage.removeItem('token');
	// 			push('/login');
	// 		})
	// 		.catch((err) => {
	// 			console.error(err);
	// 		});
	// }, []);

	return (
		<section className='logout'>
			<h1>Logout</h1>
		</section>
	);
}
