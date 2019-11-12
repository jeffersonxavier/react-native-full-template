import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './src/reducers';
import Routes from './src/Routes';

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
