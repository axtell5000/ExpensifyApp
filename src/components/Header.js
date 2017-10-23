import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (

  // NavLink is best for main navigation type scenarios, because of its extra features
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    <NavLink to="/help" activeClassName="is-active">Help</NavLink>
  </header>
);

export default Header;
