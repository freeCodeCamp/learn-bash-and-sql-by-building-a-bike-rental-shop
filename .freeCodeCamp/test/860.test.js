const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the suggested comments added correctly', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');

    assert(/(function[ \t]+RENT_MENU|RENT_MENU[ \t]*\([ \t]*\))\s*{\s*\n+\s*#[ \t]*get available bikes\s*\n+\s*#[ \t]*if no bikes available\s*\n+\s*#[ \t]*send to main menu\s*\n+\s*}/.test(scriptFile));
  });
});
