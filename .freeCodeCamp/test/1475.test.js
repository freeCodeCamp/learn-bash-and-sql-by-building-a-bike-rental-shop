const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should call the "MAIN_MENU" function with the suggested argument correctly', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');
    
    assert(/(function[ \t]+RETURN_MENU|RETURN_MENU[ \t]*\([ \t]*\))\s*{[\s\S]*send to main menu\s*\n+\s*MAIN_MENU[ \t]+('|")I could not find a record for that phone number\.\2([ \t]*;\s*|\s*\n+\s*)fi/.test(scriptFile));
  });
});
