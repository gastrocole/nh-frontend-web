// Standard imports: React, Router & Redux
import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

// Imported components by library

// Custom components in heirarchical order
import ResponsiveContainer from './components/layout/ResponsiveContainer';
import AuthRoute from './components/routing/AuthRoute';

// Pages
import Landing from './pages/Landing';
import Home from './pages/Home';
import Neighbourhoods from './pages/Neighbourhoods';
import Membership from './pages/Membership';
import Story from './pages/Story';
import NotFound from './pages/NotFound';

// Styles
import './App.css';

// Redux Store
import store from './store';

// Actions
import { loadUser } from './actions/auth';

// Utility functions
import setAuthToken from './utils/auth';

// Set api authtoken from local storage
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    // Attempt to loadUser when app starts
    store.dispatch(loadUser());
  }, [loadUser()]);
  return (
    <Provider store={store}>
      <Router>
        <Fragment className='App'>
          <ResponsiveContainer>
            <Switch>
              <Route exact path='/' component={Landing} />
              <AuthRoute exact path='/home' component={Home} />
              <Route exact path='/neighbourhoods' component={Neighbourhoods} />
              <Route exact path='/membership' component={Membership} />
              <Route exact path='/story' component={Story} />
              <Route component={NotFound} />
            </Switch>
          </ResponsiveContainer>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
