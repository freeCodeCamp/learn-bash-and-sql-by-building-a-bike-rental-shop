const assert = require('assert');
const { getFileContents } = require('./utils');

describe('You', () => {
  it('should correctly print the "BIKE_INFO" variable', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');

    assert(/BIKE_INFO[\s\S]*echo[ \t]+("|)\$BIKE_INFO\1[\s\S]*fi([ \t]*;\s*|\s*\n+\s*)fi([ \t]*;\s*|\s*\n+\s*)fi/.test(scriptFile));
  });
});
