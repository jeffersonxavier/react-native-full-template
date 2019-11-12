import { combineReducers } from 'redux';

// Example reducer funtion
function exampleReducer(state = { }, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default combineReducers({ exampleReducer });
