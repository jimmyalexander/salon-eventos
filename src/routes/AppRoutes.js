import React from 'react';

import { BrowserRouter as Router,
  Route, Switch } from 'react-router-dom';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {

  return (
    <Router >
      <div>
        <Switch>
          <Route path='/salon-eventos'  component={ DashboardRoutes } />
        </Switch>
      </div>
    </Router>
  )
}
