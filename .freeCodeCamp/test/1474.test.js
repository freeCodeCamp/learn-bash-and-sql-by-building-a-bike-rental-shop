const assert = require('assert');
const { getFileContents } = require('./utils');

describe('You', () => {
  it('should add the suggested "if" statement correctly', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');

    assert(/(function[ \t]+RETURN_MENU|RETURN_MENU[ \t]*\([ \t]*\))\s*{[\s\S]*if not found\s*\n+\s*if[ \t]+\[\[[ \t]+-z[ \t]+\$CUSTOMER_ID[ \t]+\]\]([ \t]*;\s*|\s*\n+\s*)then\s*#[ \t]*send to main menu\s*\n+\s*fi/.test(scriptFile));
  });
});
