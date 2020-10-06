const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('You', () => {
  let lastCommand;
  before(async () => {
    lastCommand = await getLastCommand();
  });

  it('should view the psql help menu', async () => {
    assert(lastCommand[0] === 'psql' && lastCommand[1] === '--help');
  });
});
