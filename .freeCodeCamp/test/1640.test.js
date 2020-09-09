const assert = require('assert');
const { getFileContents } = require('./utils');

describe('You', () => {
  it('should add the suggested "if" statement correctly', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');

    assert(/input not rented\s*\n+\s*if[ \t]+\[\[[ \t]+-z[ \t]+\$RENTAL_ID[ \t]+\]\]([ \t]*;\s*|\s*\n+\s*)then\s*#[ \t]*send to main menu\s*\n+\s*fi([ \t]*;\s*|\s*\n+\s*)fi([ \t]*;\s*|\s*\n+\s*)fi([ \t]*;\s*|\s*\n+\s*)fi/.test(scriptFile));
  });
});
