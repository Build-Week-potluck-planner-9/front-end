import axios from 'axios';

//add axiosWithAuth function here
const axiosWithAuth = () => {
	const token = localStorage.getItem('token');
	return axios.create({
		baseURL: 'http://localhost:9000/api',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `${token}`
		}
	});
};

export default axiosWithAuth;
