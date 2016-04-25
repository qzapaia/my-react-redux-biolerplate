import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import users from './users';

export default combineReducers({
  users,
  routing:routerReducer
})