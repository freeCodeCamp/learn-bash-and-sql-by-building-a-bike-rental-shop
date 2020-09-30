/*const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your "RENT_MENU" function', () => {
  let scriptFile;
  before(async () => {
    scriptFile = await getFileContents('../bike-shop.sh');
  });

  it('should have the correct "else" condition', async () => {
    const rentMenuFunction = scriptFile.match(/RENT_MENU\s*\(\s*\)\s*{[\s\S]+?[^}]}/g)[0];

    assert(/else\s+echo[ \t]+"\$AVAILABLE_BIKES"(([ \t]*;\s*)|\s*(?=\n+)\s*)fi/.test(rentMenuFunction));
  });
});*/
