const assert = require('assert');
const { getLastLog, getLastCommand } = require('./utils');

describe('You', () => {
  let lastCommand, lastLog;
  before(async () => {
    lastCommand = await getLastCommand();
    lastLog = await getLastLog(true);
  });

  it('should run your script with "./bike-shop.sh"', async () => {
    assert(/statement:SELECT\*FROMbikes;?/i.test(lastLog) && lastCommand[0] === 'psql' && lastCommand.length > 6);
  });
});
