const assert = require('assert');
const { getScriptOutput, getFileContents } = require('./utils');

describe('Your script', () => {
  it('should display the correct "MAIN_MENU" options', async () => {
    const scriptOutput = await getScriptOutput('../bike-shop.sh');
    const scriptFile = await getFileContents('../bike-shop.sh');

    assert(/\n\n1. Rent a bike\n2. Return a bike\n3. Exit/.test(scriptOutput) && /MAIN_MENU[\s\S]*Rent a bike[\s\S]*}/.test(scriptFile));
  });
});
