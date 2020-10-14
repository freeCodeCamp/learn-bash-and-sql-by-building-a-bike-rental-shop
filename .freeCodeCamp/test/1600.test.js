const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your "RETURN_MENU" function', () => {
  it('should correctly read input into a "BIKE_ID_TO_RETURN" variable', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');

    assert(/Which one would you like to return\?('|")([ \t]*;\s*|\s*\n+\s*)read[ \t]+BIKE_ID_TO_RETURN/.test(scriptFile));
  });
});
