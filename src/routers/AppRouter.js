import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import NotFoundPage from "../components/NotFoundPage";
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';

// Here we are manually setting our routes,  this allows us to use history() on things that are not part of the
// route setup
export const history = createHistory();

const AppRouter = () => (
  // Multiple routes have to be in a div. just like jsx when we create components
  <Router history={history}>
    <div>

      <Switch>
        {/*need exact or else multiple pages/parts will be seen, without it '/create' will be seen as '/' as well*/}
        <Route path='/' component={LoginPage} exact={true}/>
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
        <PrivateRoute path='/create' component={AddExpensePage}/>
        <PrivateRoute path='/edit/:id' component={EditExpensePage}/>

        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
