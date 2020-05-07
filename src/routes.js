import React from 'react';
import { Route } from 'react-router-dom';
import Studies from './components/Studies';
import Register from './components/Accounts/Register';
import Login from './components/Accounts/Login';
import PrivateRoute from './components/Common/PrivateRoute';

const BaseRouter = () => (
  <div>
    <PrivateRoute exact path='/' component={Studies} />
    <Route exact path='/register' component={Register} />
    <Route exact path='/login' component={Login} />
  </div>
)

export default BaseRouter;