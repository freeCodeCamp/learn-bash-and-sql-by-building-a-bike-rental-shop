const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your "RENT_MENU" function', () => {
  it('should echo the correct text', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');

    assert(/(function[ \t]+RENT_MENU|RENT_MENU[ \t]*\([ \t]*\))\s*{\s*echo[ \t]+('|"|)Rent Menu\2[ \t]*;?\s*}/.test(scriptFile));
  });
});
