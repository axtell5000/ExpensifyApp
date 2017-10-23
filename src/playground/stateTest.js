const state = {
  count: 0
};

function updateState(state, num) {
  return { state: state + num};
}

console.log(updateState(state, 5));
