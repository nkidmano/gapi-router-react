import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { oauth2Client } from '../apis/google';

import Login from './Login';
import User from './User';
import Admin from './Admin';
import NavBar from './NavBar';

function App() {
  useEffect(() => {
    console.log(oauth2Client);
  });
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/user" component={Admin} />
        <Route exact path="/admin" component={User} />
      </Switch>
    </Router>
  );
}

export default App;
