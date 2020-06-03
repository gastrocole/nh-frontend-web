import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';


import './App.css';
import { Container, Button } from 'semantic-ui-react';
import {Provider} from 'react-redux';

import LoginModal from './components/login/LoginModal'

import store from './store';


import './App.css';




const App = () => {
  return (
    <Provider store={store}>
    <Router>
    <Fragment className='App'>
      {/*insert nav bar here*/}
      <Container>
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route exact path='/home' component={HomePage}/>
          </Switch>
      </Container>
    </Fragment>
    </Router>
    </Provider>
  );
};

export default App;
