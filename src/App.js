import React, { Fragment } from 'react';
import './App.css';
import Login from './components/Login'

import {Provider} from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Fragment className='App'>
        <p>
          Haidee
        </p>
        <Login />
      </Fragment>
     </Provider>
  )
};

export default App;
