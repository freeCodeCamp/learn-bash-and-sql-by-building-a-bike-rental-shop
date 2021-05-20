const assert = require('assert');
const { getFileContents } = require('./utils');

describe('You', () => {
  it('should print the "BIKE_INFO" variable in the correct format', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');

    assert(/BIKE_INFO[\s\S]*echo[ \t]+("|)\$BIKE_INFO\1[ \t]*\|[ \t]*sed[ \t]+('|")s\/ \|\/"\/\2/.test(scriptFile));
  });
});
