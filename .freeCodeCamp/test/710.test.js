/*const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your "EXIT" function', () => {
  let scriptFile;
  before(async () => {
    scriptFile = await getFileContents('../bike-shop.sh');
  });

  it('should echo the correct text', async () => {
    const exitFunction = scriptFile.match(/EXIT\s*\(\s*\)\s*{[\s\S]+?[^}]}/g)[0];

    assert(/echo[ \t]+('|"|)Thank you for stopping in\.\1/.test(exitFunction));
  });
});*/
