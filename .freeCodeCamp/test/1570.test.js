const assert = require('assert');
const { getFileContents } = require('./utils');

describe('You', () => {
  it('should add an "else" with the correct comments', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');

    assert(/else\s*\n+\s*#[ \t]*display rented bikes\s*\n+\s*#[ \t]*ask for bike to return\s*\n+\s*#[ \t]*if not a number\s*\n+\s*#[ \t]*send to main menu\s*\n+\s*fi([ \t]*;\s*|\s*\n+\s*)fi/.test(scriptFile));
  });
});
