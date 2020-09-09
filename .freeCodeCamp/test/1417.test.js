const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should call the "MAIN_MENU" function with the suggested argument correctly', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');
    
    assert(/BIKE_INFO_FORMATTED[\s\S]*send to main menu\s*\n+\s*MAIN_MENU[ \t]+('|")I have put you down for the \$BIKE_INFO_FORMATTED Bike, \$CUSTOMER_NAME\.\1([ \t]*;\s*|\s*\n+\s*)fi([ \t]*;\s*|\s*\n+\s*)fi([ \t]*;\s*|\s*\n+\s*)fi/.test(scriptFile));
  });
});
