const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should call the "MAIN_MENU" function with the correct argument', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');

  assert(/send to main menu\s*\n+\s*MAIN_MENU[ \t]+"Sorry, we don't have any bikes available right now\."([ \t]*;\s*|\s*\n+\s*)fi/.test(scriptFile));
  });
});
