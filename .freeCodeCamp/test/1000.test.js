const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your "MAIN_MENU" function', () => {
  it('should have the correct "if" condition added', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');

  assert(/no bikes available\s*\n+\s*if[ \t]+\[\[[ \t]+-z[ \t]+\$AVAILABLE_BIKES[ \t]+\]\]([ \t]*;\s*|\s*\n+\s*)then\s*#[ \t]*send to main menu\s*\n+\s*fi/.test(scriptFile));
  });
});
