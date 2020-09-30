const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your "EXIT" function', () => {
  let scriptFile;
  before(async () => {
    scriptFile = await getFileContents('../bike-shop.sh');
  });

  it('should clear the terminal', async () => {
    const exitFunction = scriptFile.match(/EXIT\s*\(\s*\)\s*{[\s\S]+?[^}]}/g)[0]
    assert(/clear/.test(exitFunction));
  });
});
