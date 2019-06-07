import React, { Fragment, useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Login from '../views/Login';
import User from '../views/User';
import Admin from '../views/Admin';
import NavBar from './NavBar';

import {
  notLoggedInRoutes,
  adminRoutes,
  userRoutes,
} from '../constants/routes';

function App() {
  const [routes, setRoutes] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    const routes = isAuthenticated ? userRoutes : notLoggedInRoutes;
    setRoutes(routes);
  }, [isAuthenticated]);

  return (
    <Fragment>
      {routes && (
        <Router>
          <NavBar />
          <Switch>
            {routes.map((route, index) => (
              <Route key={index} {...route} />
            ))}
            <Redirect to={isAuthenticated ? '/' : '/login'} />
          </Switch>
        </Router>
      )}
    </Fragment>
  );
}

export default App;
