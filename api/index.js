import object from 'lodash/fp/object';
import axios from 'axios';

const dev = process.env.NODE_ENV == 'development';
const host = process.env.API_HOSTNAME || 'http://jsonplaceholder.typicode.com';

axios.defaults.baseURL = host;

axios.interceptors.request.use(function (config) {
	if(localStorage.getItem('token')){
		config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token')
	}
  return config;
});
 
axios.interceptors.response.use(function (response) {
  return response.data;
});

export default {
	getUsers(data){	
		return axios.get('/users');
	}
};

window.api = module.exports.default;