const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your "RETURN_MENU" function', () => {
  it('should correctly print the suggested line', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');

    assert(/(function[ \t]+RETURN_MENU|RETURN_MENU[ \t]*\([ \t]*\))\s*{\s*\n+\s*#[ \t]*get customer info\s*\n+\s*echo[ \t]+-e[ \t]+"\\nWhat's your phone number\?"/.test(scriptFile));
  });
});
