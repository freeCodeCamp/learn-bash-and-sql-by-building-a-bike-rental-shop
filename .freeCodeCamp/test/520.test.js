const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your "MAIN_MENU" function', () => {
  it('should echo the correct text', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');

    assert(/(function[ \t]+MAIN_MENU|MAIN_MENU[ \t]*\([ \t]*\))\s*{\s*echo[ \t]+('|"|)How may I help you\?\2[ \t]*;?\s*}/.test(scriptFile));
  });
});
