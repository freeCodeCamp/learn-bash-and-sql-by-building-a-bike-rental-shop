/*const assert = require('assert');
const { getLastLog, getLastCommand } = require('./utils');

describe('You', () => {
  let lastLog, secondToLastLog, lastCommand;
  before(async () => {
    lastLog = await getLastLog(true);
    secondToLastLog = await getLastLog(true, 2);
    lastCommand = await getLastCommand();
  });

  it('should run the suggested psql command from the terminal', () => {
    const re1 = /statement:select\*frombikes;?/i;
    const re2 = /connectionauthorized:user=freecodecampdatabase=bikesapplication_name=psql/;

    assert(re1.test(lastLog) && re2.test(secondToLastLog) && lastCommand.includes('-X'));
  });
});*/
