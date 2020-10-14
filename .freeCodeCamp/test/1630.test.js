const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the correct "RENTAL_ID" variable', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');
    const re = /check if input is rented\s*\n+\s*RENTAL_ID=\$\(\s*\$PSQL[ \t]*"\s*SELECT\s+rental_id\s+FROM\s+(customers\s+INNER\s+JOIN\s+rentals|rentals\s+INNER\s+JOIN\s+customers)\s+USING\s*\(\s*customer_id\s*\)\s*WHERE\s+(phone\s*=\s*'\s*\$PHONE_NUMBER\s*'\s+AND\s+bike_id\s*=\s*('|)\s*\$BIKE_ID_TO_RETURN\s*\3\s+AND\s+date_returned\s+IS\s+NULL|phone\s*=\s*'\s*\$PHONE_NUMBER\s*'\s+AND\s+date_returned\s+IS\s+NULL\s+AND\s+bike_id\s*=\s*('|)\s*\$BIKE_ID_TO_RETURN\s*\4|bike_id\s*=\s*('|)\s*\$BIKE_ID_TO_RETURN\s*\5\s+AND\s+phone\s*=\s*'\s*\$PHONE_NUMBER\s*'\s+AND\s+date_returned\s+IS\s+NULL|bike_id\s*=\s*('|)\s*\$BIKE_ID_TO_RETURN\s*\6\s+AND\s+date_returned\s+IS\s+NULL\s+AND\s+phone\s*=\s*'\s*\$PHONE_NUMBER\s*'|date_returned\s+IS\s+NULL\s+AND\s+bike_id\s*=\s*('|)\s*\$BIKE_ID_TO_RETURN\s*\7\s+AND\s+phone\s*=\s*'\s*\$PHONE_NUMBER\s*'|date_returned\s+IS\s+NULL\s+AND\s+phone\s*=\s*'\s*\$PHONE_NUMBER\s*'\s+AND\s+bike_id\s*=\s*('|)\s*\$BIKE_ID_TO_RETURN\s*\8)\s*;?\s*"\s*\)/i;

    assert(re.test(scriptFile) && /check if input is rented\s*\n+\s*RENTAL_ID=\$\(\s*\$PSQL[\s\S]*(\$PHONE_NUMBER[\s\S]*\$BIKE_ID_TO_RETURN|\$BIKE_ID_TO_RETURN[\s\S]*\$PHONE_NUMBER)/.test(scriptFile));
  });
});
