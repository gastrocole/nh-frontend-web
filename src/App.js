import React, { Fragment } from 'react';
import { Container, Button } from 'semantic-ui-react';
import {Provider} from 'react-redux';

import Login from './components/Login'
import store from './store';

import './App.css';


const App = () => {
  return (
    <Provider store={store}>
      <Fragment>
        <Container>
          <p>
            Haidee
          </p>
          <Login />
        </Container>
      </Fragment>
     </Provider>
  )
}

export default App;
