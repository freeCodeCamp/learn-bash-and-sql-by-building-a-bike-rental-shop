const assert = require('assert');
const { getFileContents } = require('./utils');

describe('You', () => {
  it('should read user input into a "MAIN_MENU_SELECTION" variable', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');

    assert(/MAIN_MENU[\s\S]*read[ \t]+MAIN_MENU_SELECTION[ \t]*;?\s*}/.test(scriptFile));
  });
});
