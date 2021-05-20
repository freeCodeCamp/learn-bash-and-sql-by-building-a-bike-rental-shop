const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the suggested comments added to "RETURN_MENY" function', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');

    assert(/(function[ \t]+RETURN_MENU|RETURN_MENU[ \t]*\([ \t]*\))\s*{\s*\n+\s*#[ \t]*get customer info\s*\n+\s*#[ \t]*if not found\s*\n+\s*#[ \t]*send to main menu\s*\n+\s*}/.test(scriptFile));
  });
});
