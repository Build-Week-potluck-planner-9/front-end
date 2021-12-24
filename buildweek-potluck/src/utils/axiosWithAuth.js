import axios from 'axios';

//add axiosWithAuth function here
const axiosWithAuth = () => {
	const token = localStorage.getItem('token');
	return axios.create({
		baseURL: 'https://potluckbw.herokuapp.com/api',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `${token}`
		}
	});
};

export default axiosWithAuth;
