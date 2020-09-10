const assert = require('assert');
const { getLastLog } = require('./utils');

describe('You', () => {
  let lastLog;
  before(async () => {
    lastLog = await getLastLog(true);
  });

  it('should view all the data in the "bikes" table', () => {
    const selectAll = /statement:select\*frombikes;/i;
    assert(selectAll.test(lastLog));
  });
});
