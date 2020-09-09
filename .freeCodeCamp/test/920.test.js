const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the correct "PSQL" variable', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');

    assert(/\/bash\s*\n+\s*PSQL="psql -X --username=freecodecamp --dbname=bikes --tuples-only -c"[ \t]*;?\s*$/m.test(scriptFile));
  });
});
