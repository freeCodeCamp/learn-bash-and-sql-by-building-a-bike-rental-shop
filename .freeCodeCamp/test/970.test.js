const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the correct "AVAILABLE_BIKES" variable', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');
    const re = /get available bikes\s*\n+\s*AVAILABLE_BIKES=\$\(\s*\$PSQL[ \t]*"\s*SELECT\s+bike_id\s*,\s*type\s*,\s*size\s+FROM\s+bikes\s+WHERE\s+available\s*=\s*('\s*(t|true)\s*'|true)\s*ORDER\s+BY\s+bike_id\s*;?\s*"\s*\)/i;

    assert(re.test(scriptFile) && /AVAILABLE_BIKES=\$\(\s*\$PSQL/.test(scriptFile));
  });
});
