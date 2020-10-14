const assert = require('assert');
const { getFileContents } = require('./utils');

describe('You', () => {
  it('should correctly create a "CUSTOMER_NAME" variable', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');

    assert(/PHONE_NUMBER([ \t]*;\s*|\s*\n+\s*)CUSTOMER_NAME=\$\(\s*\$PSQL[ \t]*"\s*SELECT\s+name\s+FROM\s+customers\s+WHERE\s+phone\s*=\s*'\$PHONE_NUMBER'\s*;?\s*"\s*\)/i.test(scriptFile) && /CUSTOMER_NAME=\$\(\s*\$PSQL[\s\S]*\$PHONE_NUMBER/.test(scriptFile));
  });
});
