import reduxCrud  from 'redux-crud';
import { createAction } from 'redux-actions';

const name = 'users';

var actionTypes = reduxCrud.actionTypesFor(name);
var standardActionCreators = reduxCrud.actionCreatorsFor(name);


fetch(){
  return dispatch=>{
    return api.getUsers().then(users=>{
      return dispatch(standardActionCreators.fetchSuccess(users));
    });
  }
}

let actionCreators = {
  fetch
}


export default Object.assign({},actionTypes,actionCreators,standardActionCreators);