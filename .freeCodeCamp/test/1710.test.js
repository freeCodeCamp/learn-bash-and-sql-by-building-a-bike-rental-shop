const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the correct "SET_TO_TRUE_RESULT" variable', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');
    const re = /availability to true\s*\n+\s*SET_TO_TRUE_RESULT=\$\(\s*\$PSQL[ \t]*"\s*UPDATE\s+bikes\s+SET\s+available\s*=\s*('\s*(t|true)\s*'|true)\s+WHERE\s+bike_id\s*=\s*('|)\s*\$BIKE_ID_TO_RETURN\s*\3\s*;?\s*"\s*\)/i;

    assert(re.test(scriptFile) && /availability to true\s*\n+\s*SET_TO_TRUE_RESULT=\$\(\s*\$PSQL[\s\S]*\$BIKE_ID_TO_RETURN/.test(scriptFile));
  });
});
