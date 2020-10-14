const assert = require('assert');
const { getLastLog } = require('./utils');

describe('You', () => {
  let lastLog;
  before(async () => {
    lastLog = await getLastLog(true);
  });

  it('should view all the data in the "customers" table', () => {
    const selectAll = /statement:select\*fromrentals;?/i;
    assert(selectAll.test(lastLog));
  });
});
