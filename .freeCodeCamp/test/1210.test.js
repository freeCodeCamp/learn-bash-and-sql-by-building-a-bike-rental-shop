const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your "MAIN_MENU" function', () => {
  it('should have the correct "if" condition added', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');

  assert(/if not available\s*\n+\s*if[ \t]+\[\[[ \t]+-z[ \t]+\$BIKE_AVAILABILITY[ \t]+\]\]([ \t]*;\s*|\s*\n+\s*)then\s*#[ \t]*send to main menu\s*\n+\s*fi\s*\n+\s*fi\s*\n+\s*fi/.test(scriptFile));
  });
});
