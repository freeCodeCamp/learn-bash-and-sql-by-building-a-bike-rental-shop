const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the correct "CUSTOMER_ID" variable', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');
    const re = /(function[ \t]+RETURN_MENU|RETURN_MENU[ \t]*\([ \t]*\))\s*{[\s\S]*read[ \t]+PHONE_NUMBER([ \t]*;\s*|\s*\n+\s*)CUSTOMER_ID=\$\(\s*\$PSQL[ \t]*"\s*SELECT\s+customer_id\s+FROM\s+customers\s+WHERE\s+phone\s*=\s*'\$PHONE_NUMBER'\s*;?\s*"\s*\)/i;

    assert(re.test(scriptFile) && /(function[ \t]+RETURN_MENU|RETURN_MENU[ \t]*\([ \t]*\))\s*{[\s\S]*CUSTOMER_ID=\$\(\s*\$PSQL[\s\S]*\$PHONE_NUMBER/.test(scriptFile));
  });
});
