import superagentPromisePlugin from 'superagent-promise-plugin';
import defaults from 'superagent-defaults';

const dev = process.env.NODE_ENV == 'development';
const stagingHost = 'http://jsonplaceholder.typicode.com';
const prodHost = 'http://jsonplaceholder.typicode.com';

const host = dev ? stagingHost : prodHost;

var superagent = defaults();

superagent.use(superagentPromisePlugin);

superagent.use(function(req){
	if(localStorage.getItem('token')){
		req.set({
			Authorization: 'Bearer ' + localStorage.getItem('token')
		});
	}
});

superagent.on('request',function(req){
	req.url = host+req.url;
});

export default {
	getUsers(){
		return superagent.get('/users')
										 .end();
	}
};