const assert = require('assert');
const { getFileContents } = require('./utils');

describe('You', () => {
  it('should correctly add the suggested comments', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');

    assert(/fi\s+#[ \t]+get customer_id\s*\n+\s*#[ \t]+insert bike rental\s*\n+\s*#[ \t]+set bike availability to false\s*\n+\s*#[ \t]+get bike info\s*\n+\s*#[ \t]+send to main menu\s*\n+\s*fi([ \t]*;\s*|\s*\n+\s*)fi([ \t]*;\s*|\s*\n+\s*)fi/.test(scriptFile));
  });
});
