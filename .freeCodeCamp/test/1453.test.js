const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have an empty "RETURN_MENY" function', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');

    assert(/(function[ \t]+RETURN_MENU|RETURN_MENU[ \t]*\([ \t]*\))\s*{\s*}/.test(scriptFile));
  });
});
