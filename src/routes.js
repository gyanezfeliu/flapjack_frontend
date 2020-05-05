import React from 'react';
import { Route } from 'react-router-dom';
import Studies from './components/Studies';
import Register from './components/Accounts/Register';
import Login from './components/Accounts/Login';

const BaseRouter = () => (
  <div>
    <Route exact path='/' component={Studies} />
    <Route exact path='/register' component={Register} />
    <Route exact path='/login' component={Login} />
  </div>
)

export default BaseRouter;