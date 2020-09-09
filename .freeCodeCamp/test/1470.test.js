const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your "RETURN_MENU" function', () => {
  it('should correctly read input into a "PHONE_NUMBER" variable', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');

    assert(/(function[ \t]+RETURN_MENU|RETURN_MENU[ \t]*\([ \t]*\))\s*{\s*\n+\s*#[ \t]*get customer info\s*\n+\s*echo[ \t]+-e[ \t]+"\\nWhat's your phone number\?"([ \t]*;\s*|\s*\n+\s*)read[ \t]+PHONE_NUMBER/.test(scriptFile));
  });
});
