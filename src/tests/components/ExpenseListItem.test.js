import React from 'react';
import { shallow } from 'enzyme';

import ExpenseListItem from '../../components/ExpenseListItem'
import expenseData from '../fixtures/expenses';

test('should render ExpenseListItem with expenseData', () => {
  const wrapper = shallow(<ExpenseListItem {...expenseData[0]}/>); // must have props of expenses using
  // expenseData
  expect(wrapper).toMatchSnapshot();
});
