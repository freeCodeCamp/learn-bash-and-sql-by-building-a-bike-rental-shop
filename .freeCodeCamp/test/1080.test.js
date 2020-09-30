/*const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your "MAIN_MENU" function', () => {
  let scriptFile;
  before(async () => {
    scriptFile = await getFileContents('../bike-shop.sh');
  });

  it('should have the correct if condition and statements', async () => {
    const rentMenuFunction = scriptFile.match(/MAIN_MENU\s*\(\s*\)\s*{[\s\S]+?[^}]}/g)[0]
    
    assert(/if\s+\[\[\s+\$1[ \t]+\]\](([ \t]*;\s*)|\s*(?=\n+)\s*)then\s+echo [ \t]*\$1(([ \t]*;\s*)|\s*(?=\n+)\s*)fi/.test(rentMenuFunction));
  });
});*/
