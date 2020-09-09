const assert = require('assert');
const { getFileContents } = require('./utils');

describe('You', () => {
  it('should remove the suggested code', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');

    assert(!/echo[ \t]*\$BIKE_AVAILABILITY/.test(scriptFile) && scriptFile.match(/\$BIKE_AVAILABILITY/).length === 1);
  });
});
