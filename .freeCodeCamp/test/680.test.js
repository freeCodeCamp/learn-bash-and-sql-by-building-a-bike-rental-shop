const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have a "RETURN_MENU" function', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');

    assert(/}[ \t]*;?\s*(function[ \t]+RETURN_MENU|RETURN_MENU[ \t]*\([ \t]*\))\s*{\s*}[ \t]*;?\s*MAIN_MENU/.test(scriptFile));
  });
});
