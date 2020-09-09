const assert = require('assert');
const { getLastLog } = require('./utils');

describe('You', () => {
  it('should view all the data in the suggested tables', async () => {
    const lastLog = await getLastLog(true);
    const query = /statement:select\*frombikesleftjoinrentalsusing\(bike_id\);/i;

    assert(query.test(lastLog) && !/ERROR/.test(lastLog));
  });
});
