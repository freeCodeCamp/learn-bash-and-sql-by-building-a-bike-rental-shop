const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your "case" statement', () => {
  it('should have the correct argument with the "MAIN_MENU" function call', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');

  assert(/\*[ \t]*\)\s*MAIN_MENU[ \t]+('|")Please enter a valid option\.\1\s*;;/.test(scriptFile));
  });
});
