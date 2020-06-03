import React, { Fragment } from 'react';
import { Container, Button } from 'semantic-ui-react';
import {Provider} from 'react-redux';

import LoginModal from './components/login/LoginModal'

import store from './store';


import './App.css';



const App = () => {
  return (
    <Provider store={store}>
      <Fragment>
        <Container>
          <LoginModal />
        </Container>
      </Fragment>
     </Provider>
  )
}

export default App;
