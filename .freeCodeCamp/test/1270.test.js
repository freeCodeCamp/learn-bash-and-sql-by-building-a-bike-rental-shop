const assert = require('assert');
const { getFileContents } = require('./utils');

describe('You', () => {
  it('should correctly print the suggested text', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');

    assert(/\$CUSTOMER_NAME[\s\S]*then[\s\S]*#[ \t]*get new customer name\s*\n+\s*echo[ \t]+-e[ \t]+('|")\\nWhat's your name\?\1[\s\S]*fi\s*\n+\s*fi\s*\n+\s*fi\s*\n+\s*fi/.test(scriptFile));
  });
});
