const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  let scriptFile;
  before(async () => {
    scriptFile = await getFileContents('../bike-shop.sh');
  });

  it('should correctly use your "PSQL" variable', async () => {
    const rentMenuFunction = scriptFile.match(/RENT_MENU\s*\(\s*\)\s*{[\s\S]+?[^}]}/g)[0];

    assert(/echo[ \t]+\$\(\$PSQL "SELECT \* FROM bikes;?"\)/.test(rentMenuFunction));
  });
});
