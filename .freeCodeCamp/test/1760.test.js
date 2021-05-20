const assert = require('assert');
const { getLastLog } = require('./utils');

describe('You', () => {
  it('should view all the data in the "bikes" table', () => {
    const lastLog = await getLastLog(true);

    assert(/statement:select\*frombikesorderbybike_id;/i.test(lastLog) && !/ERROR/.test(lastLog));
  });
});
