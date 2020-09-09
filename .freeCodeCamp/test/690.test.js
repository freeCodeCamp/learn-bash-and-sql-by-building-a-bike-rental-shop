const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your "RETURN_MENU" function', () => {
  it('should echo the correct text', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');

    assert(/(function[ \t]+RETURN_MENU|RETURN_MENU[ \t]*\([ \t]*\))\s*{\s*echo[ \t]+('|"|)Return Menu\2[ \t]*;?\s*}/.test(scriptFile));
  });
});
