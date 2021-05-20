const assert = require('assert');
const { getFileContents } = require('./utils');

describe('You', () => {
  it('should correctly create the "BIKE_INFO_FORMATTED" variable', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');

    assert(/BIKE_INFO[\s\S]*BIKE_INFO_FORMATTED=\$\([ \t]*echo[ \t]+("|)\$BIKE_INFO\1[ \t]*\|[ \t]*sed[ \t]+'s\/ \|\/"\/'[ \t]*\)/.test(scriptFile));
  });
});
