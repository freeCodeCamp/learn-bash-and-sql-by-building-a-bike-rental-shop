const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the correct "CUSTOMER_ID" variable', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');
    const re = /get customer_id\s*\n+\s*CUSTOMER_ID=\$\(\s*\$PSQL[ \t]*"\s*SELECT\s+customer_id\s+FROM\s+customers\s+WHERE\s+phone\s*=\s*'\$PHONE_NUMBER'\s*;?\s*"\s*\)[\s\S]*fi([ \t]*;\s*|\s*\n+\s*)fi([ \t]*;\s*|\s*\n+\s*)fi/i;

    assert(re.test(scriptFile) && /CUSTOMER_ID=\$\(\s*\$PSQL[\s\S]*\$PHONE_NUMBER/.test(scriptFile));
  });
});
