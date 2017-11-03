import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { startAddExpense } from "../actions/expenses";

export class AddExpensePage extends  React.Component {
  onSubmit = (expense) => {
    //props.dispatch(addExpense(expense)); //difficult to test this
    this.props.startAddExpense(expense);
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm
            onSubmit = {this.onSubmit}
          />
        </div>
      </div>
    );
  }
}


// Because the addExpense is imported and not a prop we cant test it as is, we have to use:

const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
