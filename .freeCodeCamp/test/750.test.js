const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your "MAIN_MENU" function', () => {
  it('should have the correct "if" condition added', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');

    assert(/(function[ \t]+MAIN_MENU|MAIN_MENU[ \t]*\([ \t]*\))\s*{\s+if[ \t]+\[\[[ \t]+\$1[ \t]+\]\]([ \t]*;\s*|\s*\n+\s*)then\s*echo[ \t]+-e[ \t]+('|")\\n\$1\3([ \t]*;\s*|\s*\n+\s*)fi/.test(scriptFile));
  });
});
