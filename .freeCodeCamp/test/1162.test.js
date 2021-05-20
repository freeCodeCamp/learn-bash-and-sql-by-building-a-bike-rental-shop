const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your "RENT_MENU" function', () => {
  it('should read input into the correct variable', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');
    
    assert(/would you like to rent\?('|")([ \t]*;\s*|\s*\n+\s*)read[ \t]+BIKE_ID_TO_RENT[\s\S]*fi/.test(scriptFile));
  });
});
