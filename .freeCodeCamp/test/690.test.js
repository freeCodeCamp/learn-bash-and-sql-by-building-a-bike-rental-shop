const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your "RETURN_MENU" function', () => {
  let scriptFile;
  before(async () => {
    scriptFile = await getFileContents('../bike-shop.sh');
  });

  it('should echo the correct text', async () => {
    const returnMenuFunction = scriptFile.match(/RETURN_MENU\s*\(\s*\)\s*{[\s\S]+?[^}]}/g)[0];

    assert(/echo[ \t]+('|"|)Return Menu\1/.test(returnMenuFunction));
  });
});
