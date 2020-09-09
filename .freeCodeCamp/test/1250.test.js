const assert = require('assert');
const { getFileContents } = require('./utils');

describe('You', () => {
  it('should correctly read input into a "PHONE_NUMBER" variable', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');

    assert(/What's your phone number\?"([ \t]*;\s*|\s*\n+\s*)read[ \t]+PHONE_NUMBER/.test(scriptFile));
  });
});
