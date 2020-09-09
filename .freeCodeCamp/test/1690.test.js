const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the correct "RETURN_BIKE_RESULT" variable', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');
    const re = /update date_returned\s*\n+\s*RETURN_BIKE_RESULT=\$\(\s*\$PSQL[ \t]*"\s*UPDATE\s+rentals\s+SET\s+date_returned\s*=\s*NOW\s*\(\s*\)\s*WHERE\s+rental_id\s*=\s*('|)\s*\$RENTAL_ID\s*\1\s*;?\s*"\s*\)/i;

    assert(re.test(scriptFile) && /update date_returned\s*\n+\s*RETURN_BIKE_RESULT=\$\(\s*\$PSQL[\s\S]*\$RENTAL_ID/.test(scriptFile));
  });
});
