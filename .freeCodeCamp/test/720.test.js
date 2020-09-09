const assert = require('assert');
const { getScriptOutput, getFileContents } = require('./utils');

describe('Your script', () => {
  it('should take you to the various menus and ouput the correct text', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');
    const scriptOutput1 = await getScriptOutput('../bike-shop.sh', '1');
    const scriptOutput2 = await getScriptOutput('../bike-shop.sh', '2');
    const scriptOutput3 = await getScriptOutput('../bike-shop.sh', '3');

    assert(/Rent Menu/.test(scriptOutput1) && /Return Menu/.test(scriptOutput2) && /Thank you for stopping in\./.test(scriptOutput3) && /\*[ \t]*\)\s*MAIN_MENU\s*;;/.test(scriptFile));
  });
});
