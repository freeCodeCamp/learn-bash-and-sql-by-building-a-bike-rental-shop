const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your "RENT_MENT" function', () => {
  let scriptFile;
  before(async () => {
    scriptFile = await getFileContents('../bike-shop.sh');
  });

  it('should echo the suggested text', async () => {
    const rentMenuFunction = scriptFile.match(/RENT_MENU\s*\(\s*\)\s*{[\s\S]+?[^}]}/g)[0]

    assert(/echo[ \t]+-e[ \t]+('|"|)Here are the bikes we have available:\\n\1/.test(rentMenuFunction));
  });
});
