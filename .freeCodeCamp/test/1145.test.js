const assert = require('assert');
const { getFileContents } = require('./utils');

describe('You', () => {
  it('should correctly display the available bikes', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');

    assert(/do\s+echo[ \t]+"\$BIKE_ID\) \$SIZE\\" \$TYPE Bike"([ \t]*;\s*|\s*\n+\s*)done[\s\S]*fi/.test(scriptFile));
  });
});
