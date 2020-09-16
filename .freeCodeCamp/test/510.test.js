const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have a "MAIN_MENU" function', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');

    assert(/^\s*(function[ \t]+MAIN_MENU|MAIN_MENU[ \t]*\([ \t]*\))\s*{\s*}/m.test(scriptFile));
  });
});
