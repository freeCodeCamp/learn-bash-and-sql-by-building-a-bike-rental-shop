const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the correct "BIKE_AVAILABILITY" variable', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');
    const re = /get bike availability\s*\n+\s*BIKE_AVAILABILITY=\$\(\s*\$PSQL[ \t]*"\s*SELECT\s+available\s+FROM\s+bikes\s+WHERE\s+(bike_id\s*=\s*('|)\s*\$BIKE_ID_TO_RENT\s*\2\s+AND\s+available\s*=\s*('\s*(t|true)\s*'|true)|available\s*=\s*('\s*(t|true)\s*'|true)\s+ANDbike_id\s*=\s*('|)\s*\$BIKE_ID_TO_RENT\s*\7)\s*;?\s*"\s*\)/i;

    assert(re.test(scriptFile) && /BIKE_AVAILABILITY=\$\(\s*\$PSQL[\s\S]*BIKE_ID_TO_RENT/.test(scriptFile));
  });
});
