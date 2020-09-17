const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have a "RENT_MENU" function', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');

    assert(/}[ \t]*;?\s*(function[ \t]+RENT_MENU|RENT_MENU[ \t]*\([ \t]*\))\s*{\s*}[ \t]*;?\s*MAIN_MENU[ \t]*;?\s*$/.test(scriptFile));
  });
});
