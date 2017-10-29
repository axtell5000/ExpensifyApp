import database from '../firebase/firebase';

// Action generators - functions that return action objects
// What data to track and what state change to them
// Actions - what must be done to state
// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;

    const expense = { description, note, amount, createdAt }; // destructuring using them in a single expense

    return database.ref('expenses').push(expense).then( (ref) => {
      dispatch(addExpense({
        id: ref.key,
          ...expense
      }));
    })
  };
};

// REMOVE_EXPENSE
export const removeExpense = ( {id} ={} ) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});
