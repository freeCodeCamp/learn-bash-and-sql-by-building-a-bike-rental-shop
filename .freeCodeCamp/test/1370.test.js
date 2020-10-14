const assert = require('assert');
const { getFileContents } = require('./utils');

describe('You', () => {
  it('should correctly create the suggested "SET_TO_FALSE_RESULT" variable', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');
    const re = /availability to false\s*\n+\s*SET_TO_FALSE_RESULT=\$\(\s*\$PSQL[ \t]*"\s*UPDATE\s+bikes\s+SET\s+available\s*=\s*('(f|false)'|false)\s+WHERE\s+bike_id\s*=\s*('|)\$BIKE_ID_TO_RENT\3\s*;?\s*"\s*\)[\s\S]*fi([ \t]*;\s*|\s*\n+\s*)fi([ \t]*;\s*|\s*\n+\s*)fi/i;

    assert(re.test(scriptFile) && /SET_TO_FALSE_RESULT=\$\(\s*\$PSQL[\s\S]*\$BIKE_ID_TO_RENT/.test(scriptFile));
  });
});


