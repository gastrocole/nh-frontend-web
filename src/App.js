// Standard imports: React, Router & Redux
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

// Custom components
import Navigation from './components/navigation/Navigation';
import AuthRoute from './components/routing/AuthRoute';
import GuestRoute from './components/routing/GuestRoute';

// Pages
import Home from './pages/Home';
import Register from './pages/Register';
import Membership from './pages/Membership';
import Partners from './pages/Partners';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';

// Redux Store
import store from './store';

// Actions
import setAuthToken from './utils/auth';

// Utility functions
import { loadUser } from './actions/auth';
import Notification from './components/notifications/Notification';

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
        <Navigation>
          <Notification />
          <Switch>
            <Route exact path='/' component={Home} />
            <GuestRoute
              exact
              path='/register'
              component={Register}
            ></GuestRoute>
            <GuestRoute exact path='/membership' component={Membership} />
            <GuestRoute exact path='/partners' component={Partners} />
            <AuthRoute exact path='/dashboard' component={Dashboard} />
            <Route component={NotFound} />
          </Switch>
        </Navigation>
      </Router>
    </Provider>
  );
};

export default App;
