const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the correct "CUSTOMER_RENTALS" variable', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');
    const re = /get customer's rentals\s*\n+\s*CUSTOMER_RENTALS=\$\(\s*\$PSQL[ \t]*"\s*SELECT\s+bike_id\s*,\s*type\s*,\s*size\s+FROM\s+bikes\s+INNER\s+JOIN\s+rentals\s+USING\s*\(\s*bike_id\s*\)\s*INNER\s+JOIN\s+customers\s+USING\s*\(\s*customer_id\s*\)\s*WHERE\s+(customer_id\s*=\s*('|)\s*\$CUSTOMER_ID\s*\2\s+AND\s+date_returned\s+IS\s+NULL|date_returned\s+IS\s+NULL\s+AND\s+customer_id\s*=\s*('|)\s*\$CUSTOMER_ID\s*\3)\s+ORDER\s+BY\s+bike_id\s*;?\s*"\s*\)/i;

    assert(re.test(scriptFile) && /get customer's rentals\s*\n+\s*CUSTOMER_RENTALS=\$\(\s*\$PSQL[\s\S]*\$CUSTOMER_ID/.test(scriptFile));
  });
});
