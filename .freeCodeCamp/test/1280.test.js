const assert = require('assert');
const { getFileContents } = require('./utils');

describe('You', () => {
  it('should correctly read input into a "CUSTOMER_NAME" variable', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');

    assert(/\$CUSTOMER_NAME[\s\S]*then[\s\S]*What's your name\?('|")[\s\S]*read[ \t]+CUSTOMER_NAME([ \t]*;\s*|\s*\n+\s*)[\s\S]*fi\s*\n+\s*fi\s*\n+\s*fi\s*\n+\s*fi/.test(scriptFile));
  });
});
