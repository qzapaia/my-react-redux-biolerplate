import actions from '../actions/users';

const initialState = {}

export default function(state = initialState, action){
	switch (action.type) {
		case actions.USERS_FETCH_SUCCESS:
	    return Object.assign({}, state, action.records);
		default:
		  return state;
  }
}