import React from 'react'
import store from './state/store'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import { IndexRoute, Router, Route, browserHistory } from 'react-router'

import App from './containers/App';
import Home from './containers/Home';

require('es6-promise').polyfill();
require('isomorphic-fetch');

let rootElement = document.getElementById('root');

render(
  <Provider store={store}>
  	<Router history={browserHistory}>
      
			<Route path="/" component={App}>
				<IndexRoute component={Home}/>
			</Route>

    </Router>
  </Provider>,
  rootElement
)