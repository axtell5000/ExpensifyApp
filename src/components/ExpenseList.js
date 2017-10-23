import React from 'react';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

// This export is used to help in testing - we need the one not connected to the store for testing
export const ExpenseList = (props) => (
  <div>

    {
      props.expenses.length === 0 ? (
        <p>No expenses</p>
      ) : (
        props.expenses.map( (expense) => {
          return <ExpenseListItem key={expense.id} {...expense}/>;
        })
      )
    }

  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

// When we call connect it returns a function which we then call with Component we want to use
export default connect(mapStateToProps)(ExpenseList);


