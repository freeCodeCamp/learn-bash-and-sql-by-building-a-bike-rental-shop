const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('You', () => {
  let lastCommand;
  before(async () => {
    lastCommand = await getLastCommand();
  });

  it('should use "touch" to create "castle.sh"', async () => {
    assert(lastCommand[0] === 'chmod');
  });
});
