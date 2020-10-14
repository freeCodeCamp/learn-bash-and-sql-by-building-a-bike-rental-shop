const assert = require('assert');
const { getFileContents } = require('./utils');

describe('You', () => {
  it('should correctly create a "INSERT_CUSTOMER_RESULT" variable', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');
    const re = /insert new customer\s*\n+\s*INSERT_CUSTOMER_RESULT=\$\(\s*\$PSQL[ \t]*"\s*INSERT\s+INTO\s+customers\s*\(\s*(name\s*,\s*phone\s*\)\s*VALUES\s*\(\s*'\$CUSTOMER_NAME'\s*,\s*'\$PHONE_NUMBER|phone\s*,\s*name\s*\)\s*VALUES\s*\(\s*'\$PHONE_NUMBER'\s*,\s*'\$CUSTOMER_NAME)'\s*\)\s*;?\s*"\s*\)([ \t]*;\s*|\s*\n+\s*)fi([ \t]*;\s*|\s*\n+\s*)fi([ \t]*;\s*|\s*\n+\s*)fi([ \t]*;\s*|\s*\n+\s*)fi/i;

    assert(re.test(scriptFile) && /INSERT_CUSTOMER_RESULT=\$\(\s*\$PSQL[\s\S]*(\$CUSTOMER_NAME[\s\S]*\$PHONE_NUMBER|\$PHONE_NUMBER[\s\S]*\$CUSTOMER_NAME)/.test(scriptFile));
  });
});
