const assert = require('assert');
const { getLastLog } = require('./utils');

describe('You', () => {
  it('should be connected to "bikes"', async () => {
    const lastLog = await getLastLog(true);
    const re = /connectionauthorized:user=freecodecampdatabase=bikesapplication_name=psql/;

    assert(re.test(lastLog));
  });
});
