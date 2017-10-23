import React from 'react';
import { shallow } from 'enzyme';

import { ExpenseList } from '../../components/ExpenseList';
import expenseData from '../fixtures/expenses';

test('should render ExpenseList with expenseData', () => {
  const wrapper = shallow(<ExpenseList expenses={expenseData}/>); // must have props of expenses using expenseData
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseList with empty message', () => {
  const wrapper = shallow(<ExpenseList expenses={[]}/>);
  expect(wrapper).toMatchSnapshot();
});
