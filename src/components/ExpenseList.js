import React from 'react';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

// This export is used to help in testing - we need the one not connected to the store for testing
export const ExpenseList = (props) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Expenses</div>
      <div className="show-for-desktop">Expense</div>
      <div className="show-for-desktop">Amount</div>
    </div>
    <div className="list-body">
      {
        props.expenses.length === 0 ? (
          <div className="list-item list-item--message">
            <span>No expenses</span>
          </div>
        ) : (
          props.expenses.map( (expense) => {
            return <ExpenseListItem key={expense.id} {...expense}/>;
          })
        )
      }
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

// When we call connect it returns a function which we then call with Component we want to use
export default connect(mapStateToProps)(ExpenseList);


