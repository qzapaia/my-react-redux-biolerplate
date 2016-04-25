import promiseMiddleware from 'redux-promise';
import thunkMiddleware from 'redux-thunk';
import persistState from 'redux-localstorage';
import { compose, createStore, applyMiddleware } from 'redux';

import reducer from '../reducers';

const createPersistentStore = compose(
  persistState()
)(createStore)

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  promiseMiddleware
)(createPersistentStore)


const store = createStoreWithMiddleware(reducer);

store.subscribe(() =>
  console.log('subscribe',store.getState())
);

export default store;