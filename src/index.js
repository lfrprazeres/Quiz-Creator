import { Provider } from "react-redux";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store, persistor } from './store';
import './global.css';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>,
  document.getElementById('root')
);