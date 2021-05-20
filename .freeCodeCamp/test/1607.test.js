const assert = require('assert');
const { getFileContents } = require('./utils');

describe('You', () => {
  it('should add an "else" with the correct comments', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');

    assert(/BIKE_ID_TO_RETURN[\s\S]*else\s*\n+\s*#[ \t]*check if input is rented\s*\n+\s*#[ \t]*if input not rented\s*\n+\s*#[ \t]*send to main menu\s*\n+\s*fi([ \t]*;\s*|\s*\n+\s*)fi([ \t]*;\s*|\s*\n+\s*)fi/.test(scriptFile));
  });
});
