import axios from 'axios';

export const REQUEST_TODO='REQUEST_TODO';
function requestTodo() {
  return { type: REQUEST_TODO };
}

export const RECEIVE_TODO='RECEIVE_TODO';
function receiveTodo(status, data) {
  return { type: RECEIVE_TODO, status, data };
}

export const fakeRequestTodo = (id) => (dispatch) => {
  dispatch(requestTodo());

  return new Promise((resolve, reject) => {
    axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(({ data }) => {
        dispatch(receiveTodo('success', data));
        resolve();
      })
      .catch(e => {
        console.log('Error', e);
        dispatch(receiveTodo('error'));
      });
  });
}
