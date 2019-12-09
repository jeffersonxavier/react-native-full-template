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

export default combineReducers({ isFetching });
