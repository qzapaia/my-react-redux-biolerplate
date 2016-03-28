import { compose, createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import thunkMiddleware from 'redux-thunk';

import { browserHistory } from 'react-router';
import { syncHistory } from 'redux-simple-router';


import reducer from '../reducers';

import persistState from 'redux-localstorage';

// reduxRouterMiddleware dispatched route actions to the history 
const reduxRouterMiddleware = syncHistory(browserHistory)

const createPersistentStore = compose(
  persistState()
)(createStore)

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  promiseMiddleware,
  reduxRouterMiddleware
)(createPersistentStore)


const store = createStoreWithMiddleware(reducer);

store.subscribe(() =>
  console.log('subscribe',store.getState())
);

export default store;