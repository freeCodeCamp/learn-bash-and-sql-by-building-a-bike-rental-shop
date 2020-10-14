const assert = require('assert');
const { getLastLog } = require('./utils');

describe('You', () => {
  it('should view all the data in the "customers" table', async () => {
    const lastLog = await getLastLog(true);

    assert(/statement:select\*fromcustomers;/i.test(lastLog) && !/ERROR/.test(lastLog));
  });
});
