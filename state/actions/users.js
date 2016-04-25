import reduxCrud  from 'redux-crud';
import { createAction } from 'redux-actions';
import api from '../../api';
const name = 'users';

var actionTypes = reduxCrud.actionTypesFor(name);
var standardActionCreators = reduxCrud.actionCreatorsFor(name);



let actionCreators = {
	fetch(){
	  return dispatch=>{
	    return api.getUsers().then(users=>{
	      return dispatch(standardActionCreators.fetchSuccess(users));
	    });
	  }
	}
}


export default Object.assign({},actionTypes,actionCreators,standardActionCreators);