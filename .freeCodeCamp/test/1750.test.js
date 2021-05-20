const assert = require('assert');
const { getLastLog } = require('./utils');

describe('You', () => {
  it('should view all the data in the "rentals" table', async () => {
    const lastLog = await getLastLog(true);

    assert(/statement:select\*fromrentals;/i.test(lastLog) && !/ERROR/.test(lastLog));
  });
});
