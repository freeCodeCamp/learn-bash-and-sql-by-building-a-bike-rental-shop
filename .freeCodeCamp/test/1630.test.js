const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the correct "RENTAL_ID" variable', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');
    const re = /check if input is rented\s*\n+\s*RENTAL_ID=\$\(\s*\$PSQL[ \t]*"\s*SELECT\s+rental_id\s+FROM\s+(customers\s+INNER\s+JOIN\s+rentals|rentals\s+INNER\s+JOIN\s+customers)\s+USING\s*\(\s*customer_id\s*\)\s*WHERE\s+(customer_id\s*=\s*('|)\s*\$CUSTOMER_ID\s*\3\s+AND\s+bike_id\s*=\s*('|)\s*\$BIKE_ID_TO_RETURN\4\s+AND\s+date_returned\s+IS\s+NULL|customer_id\s*=\s*('|)\s*\$CUSTOMER_ID\s*\5\s+AND\s+date_returned\s+IS\s+NULL\s+AND\s+bike_id\s*=\s*('|)\s*\$BIKE_ID_TO_RETURN\6|bike_id\s*=\s*('|)\s*\$BIKE_ID_TO_RETURN\7\s+AND\s+customer_id\s*=\s*('|)\s*\$CUSTOMER_ID\s*\8\s+AND\s+date_returned\s+IS\s+NULL|bike_id\s*=\s*('|)\s*\$BIKE_ID_TO_RETURN\9\s+AND\s+date_returned\s+IS\s+NULL\s+AND\s+customer_id\s*=\s*('|)\s*\$CUSTOMER_ID\s*\10|date_returned\s+IS\s+NULL\s+AND\s+bike_id\s*=\s*('|)\s*\$BIKE_ID_TO_RETURN\11\s+AND\s+customer_id\s*=\s*('|)\s*\$CUSTOMER_ID\s*\12|date_returned\s+IS\s+NULL\s+AND\s+customer_id\s*=\s*('|)\s*\$CUSTOMER_ID\s*\13\s+AND\s+bike_id\s*=\s*('|)\s*\$BIKE_ID_TO_RETURN\14)\s*;?\s*"\s*\)/i;

    assert(re.test(scriptFile) && /check if input is rented\s*\n+\s*RENTAL_ID=\$\(\s*\$PSQL[\s\S]*(\$CUSTOMER_ID[\s\S]*\$BIKE_ID_TO_RETURN|\$BIKE_ID_TO_RETURN[\s\S]*\$CUSTOMER_ID)/.test(scriptFile));
  });
});
