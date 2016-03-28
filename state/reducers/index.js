import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';

import users from './users';

export default combineReducers({
  users,
  routing:routeReducer
})