import React from 'react';
import { Route } from 'react-router-dom';
import Studies from './components/Studies';

const BaseRouter = () => (
  <div>
    <Route exact path='/' component={Studies} />
  </div>
)

export default BaseRouter;