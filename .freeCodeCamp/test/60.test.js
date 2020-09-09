const assert = require('assert');
const { getLastLog } = require('./utils');

describe('You', () => {
  let lastLog;
  before(async () => {
    lastLog = await getLastLog(true);
  });

  it('should be connected to "bikes"', () => {
    const re = /connectionauthorized:user=freecodecampdatabase=bikesapplication_name=psql/;
    assert(re.test(lastLog));
  });
});
