import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import DashboardPage from './components/pages/DashboardPage';
import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';

const App = ({ location }) => (
  <div className="ui container">
    <Route location={location} path="/" exact component={HomePage} />
    <GuestRoute path="/login" location={location} exact component={LoginPage} />
    <UserRoute
      path="/dashboard"
      location={location}
      exact
      component={DashboardPage}
    />
  </div>
);

export default App;
