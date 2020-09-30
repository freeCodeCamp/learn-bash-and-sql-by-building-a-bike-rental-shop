const assert = require('assert');
const { getFileContents } = require('./utils');

describe('You "EXIT" function', () => {
  let scriptFile;
  before(async () => {
    scriptFile = await getFileContents('../bike-shop.sh');
  });

  it('should exit the program', async () => {
    const exitFunction = scriptFile.match(/EXIT\s*\(\s*\)\s*{[\s\S]+?[^}]}/g)[0]
    assert(/exit/.test(exitFunction));
  });
});
