const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have an empty "RENT_MENU" function', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');

    assert(/(function[ \t]+RENT_MENU|RENT_MENU[ \t]*\([ \t]*\))\s*{\s*}/.test(scriptFile));
  });
});
