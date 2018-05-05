import axios from 'axios';

let baseURL = 'http://thecouch.in';

export default (query, authToken) => {
	let instance = axios.create({
		baseURL,
		headers: { Authorization: 'Data from State' },
	});
	return instance.post(`${baseURL}/${query}`);
};
