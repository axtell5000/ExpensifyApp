import moment from 'moment';

import { setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount } from "../../actions/filters";

test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
});

test('should generate set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  })
});

test('should generate set text action object with provided values', () => {
  const action = setTextFilter('Shizzle');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'Shizzle'
  });
});

test('should generate set text action object with default value', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('should generate sort by date action object', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  });
});

test('should generate sort by amount action object', () => {
  expect(sortByAmount()).toEqual({type: 'SORT_BY_AMOUNT'}); // For these type of test one can do it this way as well
});

//
