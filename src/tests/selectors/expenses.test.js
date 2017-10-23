import moment from 'moment';

import selectExpenses from '../../selectors/expenses';
import expensesData from '../fixtures/expenses';



test('should filter by text value', () => {
  const filters = {
    text: 'e',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };

  const result = selectExpenses(expensesData, filters);
  // What we are saying below, is the result of above call should only return the two array elemts based on our
  // sample data, plus the order of the returned values to be 'displayed'
  expect(result).toEqual([expensesData[2], expensesData[1]]);
});

test('should filter by startDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined
  };

  const result = selectExpenses(expensesData, filters);
  // What we are saying below, is the result of above call should only return the two array elemts based on our
  // sample data, plus the order of the returned values to be 'displayed'
  expect(result).toEqual([expensesData[2], expensesData[0]]);
});

test('should filter by endDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0)
  };

  const result = selectExpenses(expensesData, filters);
  // What we are saying below, is the result of above call should only return the two array elemts based on our
  // sample data, plus the order of the returned values to be 'displayed'
  expect(result).toEqual([expensesData[0], expensesData[1]]);
});

test('should sort by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };

  const result = selectExpenses(expensesData, filters);
  // What we are saying below, is the result of above call should only return the two array elemts based on our
  // sample data, plus the order of the returned values to be 'displayed'
  expect(result).toEqual([expensesData[2], expensesData[0], expensesData[1]]);
});

test('should sort by date', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };

  const result = selectExpenses(expensesData, filters);
  // What we are saying below, is the result of above call should only return the two array elemts based on our
  // sample data, plus the order of the returned values to be 'displayed'
  expect(result).toEqual([expensesData[1], expensesData[2], expensesData[0]]);
});

