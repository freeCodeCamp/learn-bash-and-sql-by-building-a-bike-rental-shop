const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should correctly print the "CUSTOMER_RENTALS" variable', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');

    assert(/get customer's rentals\s*\n+\s*CUSTOMER_RENTALS[\s\S]*echo[ \t]+"\$CUSTOMER_RENTALS"/.test(scriptFile));
  });
});
