import { combineReducers } from 'redux';
import { REQUEST_TODO, RECEIVE_TODO } from '../actions';

// Example reducer funtion
function isFetching(state = false, action) {
  switch (action.type) {
    case REQUEST_TODO:
      return true;
    case RECEIVE_TODO:
      return false;
    default:
      return state;
  }
}

function todo(state = {}, action) {
  switch (action.type) {
    case RECEIVE_TODO:
      if (action.status == 'success') {
        return { data: action.data };
      } else {
        return { error: true };
      }
    default:
      return state;
  }
}

export default combineReducers({ isFetching, todo });
