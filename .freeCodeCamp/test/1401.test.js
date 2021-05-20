const assert = require('assert');
const { getFileContents } = require('./utils');

describe('You', () => {
  it('should correctly create the suggested "BIKE_INFO" variable', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');
    const re = /get bike info\s*\n+\s*BIKE_INFO=\$\(\s*\$PSQL[ \t]*"\s*SELECT\s+size\s*,\s*type\s+FROM\s*bikes\s*WHERE\s+bike_id\s*=\s*('|)\$BIKE_ID_TO_RENT\1\s*;?\s*"\s*\)/i;

    assert(re.test(scriptFile) && /BIKE_INFO=\$\(\s*\$PSQL[\s\S]*\$BIKE_ID_TO_RENT/.test(scriptFile));
  });
});
