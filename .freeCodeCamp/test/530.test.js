const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should call the "MAIN_MENU" function', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');

    assert(/^\s*MAIN_MENU[\s\S]*}\s*MAIN_MENU\s*$/m.test(scriptFile));
  });
});
