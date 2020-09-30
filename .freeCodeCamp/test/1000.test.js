/*const assert = require('assert');
const { getLastQueryResult, getLastLog } = require('./utils');

describe('You', () => {
  let lastQueryResult, lastLog;
  before(async () => {
    lastQueryResult = await getLastQueryResult();
    lastLog = await getLastLog();
  });

  it('should get the correct rows and columns with the psql prompt', async () => {
    const test1 = !/available/.test(lastQueryResult);
    const test2 = /bike_id/.test(lastQueryResult);
    const test3 = /type/.test(lastQueryResult);
    const test4 = /size/.test(lastQueryResult);
    const test5 = /select[ \t]+.*from[ \t]+bikes[ \t]+where[ \t]+available[ \t]*=[ \t]*'(t|true)'/i.test(lastLog);

    assert(test1 && test2 && test3 && test4 && test5);
  });
});*/
