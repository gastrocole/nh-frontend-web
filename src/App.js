import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import ResponsiveContainer from './components/layout/ResponsiveContainer';
import AuthRoute from './components/routing/AuthRoute';
import LandingPage from './components/landing/LandingPage';
import HomePage from './components/home/HomePage';

import store from './store';

import setAuthToken from './utils/auth';
import { loadUser } from './actions/auth';

import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment className='App'>
          {/*insert nav bar here*/}
          <ResponsiveContainer>
            <Switch>
              <Route exact path='/' component={LandingPage} />
              <AuthRoute exact path='/home' component={HomePage} />
            </Switch>
          </ResponsiveContainer>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
