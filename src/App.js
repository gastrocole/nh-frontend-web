// Standard imports: React, Router & Redux
import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

// Custom components
import ResponsiveContainer from './components/layout/ResponsiveContainer';
import AuthRoute from './components/routing/AuthRoute';

// Pages
import Home from './pages/Home';
import Membership from './pages/Membership';
import Partners from './pages/Partners';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';

// Styles
import './App.css';

// Redux Store
import store from './store';

// Actions
import setAuthToken from './utils/auth';

// Utility functions
import { loadUser } from './actions/auth';

// Set api auth token from local storage
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    // Attempt to load user when app starts
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment className='App'>
          <ResponsiveContainer>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/membership' component={Membership} />
              <Route exact path='/partners' component={Partners} />
              <AuthRoute exact path='/dashboard' component={Dashboard} />
              <Route component={NotFound} />
            </Switch>
          </ResponsiveContainer>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
