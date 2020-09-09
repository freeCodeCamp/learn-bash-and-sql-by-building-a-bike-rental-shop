const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should correctly trim space from the "CUSTOMER_NAME" variable', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');
    
    assert(/MAIN_MENU[ \t]+"I have put you down for the \$BIKE_INFO_FORMATTED Bike, \$\([ \t]*echo[ \t]+\$CUSTOMER_NAME[ \t]*\|[ \t]*sed[ \t]+(-r|-E|--regexp-extended)[ \t]+('|")s\/(\^ \*\| \*\$| \*\$\|\^ \*)\/\/[ \t]*g\2[ \t]*\)\."([ \t]*;\s*|\s*\n+\s*)fi([ \t]*;\s*|\s*\n+\s*)fi([ \t]*;\s*|\s*\n+\s*)fi/.test(scriptFile));
  });
});
