import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { addExpense } from "../actions/expenses";

export class AddExpensePage extends  React.Component {
  onSubmit = (expense) => {
    //props.dispatch(addExpense(expense)); //difficult to test this
    this.props.addExpense(expense);
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm
          onSubmit = {this.onSubmit}
        />
      </div>
    );
  }
}


// Because the addExpense is imported and not a prop we cant test it as is, we have to use:

const mapDispatchToProps = (dispatch) => ({
  addExpense: (expense) => dispatch(addExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
