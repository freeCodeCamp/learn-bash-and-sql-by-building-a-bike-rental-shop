const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  let scriptFile;
  before(async () => {
    scriptFile = await getFileContents('../bike-shop.sh');
  });

  it('should have the correct "PSQL" variable', async () => {
    const psqlVariable = scriptFile.match(/^PSQL=(.*)/m)[0];
    const re = /psql[ \t]+-X[ \t]+--username=freecodecamp[ \t]+--dbname=bikes[ \t]+--tuples-only[ \t]+-c/.test(psqlVariable);

    assert(re);
  });
});