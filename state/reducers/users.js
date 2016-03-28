import faqsAction from '../actions/users';

const initialState = {}

export default function(state = initialState, action){
	switch (action.type) {
		case faqsAction.USERS_FETCH_SUCCESS:
			console.log(action);
	    return Object.assign({}, state, action.records);
		default:
		  return state;
  }
}