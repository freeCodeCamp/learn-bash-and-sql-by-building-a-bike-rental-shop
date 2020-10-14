const assert = require('assert');
const { getFileContents } = require('./utils');

describe('You', () => {
  it('should add an "else" with the correct comments', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');

    assert(/do not have that bike rented[\s\S]*else\s*\n+\s*#[ \t]*update date_returned\s*\n+\s*#[ \t]*set bike availability to true\s*\n+\s*#[ \t]*send to main menu\s*\n+\s*fi([ \t]*;\s*|\s*\n+\s*)fi([ \t]*;\s*|\s*\n+\s*)fi([ \t]*;\s*|\s*\n+\s*)fi/.test(scriptFile));
  });
});
