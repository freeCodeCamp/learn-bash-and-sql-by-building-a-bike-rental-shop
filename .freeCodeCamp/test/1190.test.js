const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('correctly print the "BIKE_AVAILABILITY" variable', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');

    assert(/BIKE_AVAILABILITY[\s\S]*echo[ \t]+("|)\$BIKE_AVAILABILITY\1[\s\S]*fi[\s\S]*fi/.test(scriptFile));
  });
});
