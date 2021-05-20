const assert = require('assert');
const { getFileContents } = require('./utils');

describe('You', () => {
  it('should add an "else" with the correct comments', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');

    assert(/(function[ \t]+RETURN_MENU|RETURN_MENU[ \t]*\([ \t]*\))\s*{[\s\S]*else\s*\n+\s*#[ \t]*get customer's rentals\s*\n+\s*#[ \t]*if no rentals\s*\n+\s*#[ \t]*send to main menu\s*\n+\s*fi/.test(scriptFile));
  });
});
