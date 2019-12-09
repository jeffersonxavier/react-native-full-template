// Define your action functions
export const REQUEST_TODO='REQUEST_TODO';
function requestTodo() {
    return { type: REQUEST_TODO };
}

export const RECEIVE_TODO='RECEIVE_TODO';
function receiveTodo() {
    return { type: RECEIVE_TODO };
}

export const fakeRequestTodo = (id) => (dispatch) => {
    dispatch(requestTodo());
    return new Promise((resolve) => {
        setTimeout(() => {
            dispatch(receiveTodo())
            resolve();
        }, 3000);
    });
}
