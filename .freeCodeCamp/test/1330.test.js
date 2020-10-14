const assert = require('assert');
const { getFileContents } = require('./utils');

describe('You', () => {
  it('should correctly create a "INSERT_RENTAL_RESULT" variable', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');
    const re = /insert bike rental\s*\n+\s*INSERT_RENTAL_RESULT=\$\(\s*\$PSQL[ \t]*"\s*INSERT\s+INTO\s+rentals\s*\(\s*(customer_id\s*,\s*bike_id\s*\)\s*VALUES\s*\(\s*('|)\$CUSTOMER_ID\2\s*,\s*('|)\$BIKE_ID_TO_RENT\3|bike_id\s*,\s*customer_id\s*\)\s*VALUES\s*\(\s*('|)\$BIKE_ID_TO_RENT\4\s*,\s*('|)\$CUSTOMER_ID\5)\s*\)\s*;?\s*"\s*\)[\s\S]*fi([ \t]*;\s*|\s*\n+\s*)fi([ \t]*;\s*|\s*\n+\s*)fi/i;

    assert(re.test(scriptFile) && /INSERT_RENTAL_RESULT=\$\(\s*\$PSQL[\s\S]*(\$CUSTOMER_ID[\s\S]*\$BIKE_ID_TO_RENT|\$BIKE_ID_TO_RENT[\s\S]*\$CUSTOMER_ID)/.test(scriptFile));
  });
});
