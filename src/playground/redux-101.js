import { createStore } from 'redux';

// Action generators - functions that return action objects
// destructuring and giving default value
const incrementCount = ({incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  incrementBy
  // incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
});

// destructuring and giving default value
const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const resetCount = () => ({
  type: 'RESET'
});

const setCount = ({count}) => ({
  type: 'SET',
  count
});

// Actions - what must be done to state
// Reducers - actually doing the changes based on Actions (what must be done)

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action

const countReducer = (state = {count: 0} ,action) => {

  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'SET':
      return {
        count: action.count
      };
    case 'RESET':
      return {
        count: 0
      }
    default:
      return state;
  }

};

const store = createStore(countReducer);

// const unsubscribe = store.subscribe(() => {
//   console.log(store.getState());
// });

// subscribe - do something everytime the store changes
store.subscribe(() => {
  console.log(store.getState());
});



// Actions - an object that get sent to the store telling it to do something

// I'd like to increment the count

// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5 // built into action
// });

store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(incrementCount());

store.dispatch(decrementCount({ decrementBy: 100}));

store.dispatch(resetCount());
store.dispatch(setCount({count: 1000}));

// store.dispatch({
//   type: 'SET',
//   count: 101
// });


