
// In __mocks__ we are creating mock modules to help testing. Has to be __mocks__ directory name

const moment = require.requireActual('moment'); // We have to reference the original not the mocked moment

export default (timestamp = 0) => {
  return moment(timestamp);
}
