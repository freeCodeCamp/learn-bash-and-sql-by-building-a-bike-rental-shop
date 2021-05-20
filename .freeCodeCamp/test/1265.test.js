const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the correct "if" condition added', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');

    assert(/customer doesn't exist\s*\n+\s*if[ \t]+\[\[[ \t]+-z[ \t]+\$CUSTOMER_NAME[ \t]+\]\]([ \t]*;\s*|\s*\n+\s*)then\s*#[ \t]*get new customer name\s*\n+\s*#[ \t]*insert new customer\s*\n+\s*fi\s*\n+\s*fi\s*\n+\s*fi\s*\n+\s*fi/.test(scriptFile));
  });
});
