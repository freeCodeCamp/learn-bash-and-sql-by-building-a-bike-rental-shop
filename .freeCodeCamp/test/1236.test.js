const assert = require('assert');
const { getFileContents } = require('./utils');

describe('You', () => {
  it('should add an "else" with the correct comments', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');

    assert(/bike is not available\.('|")([ \t]*;\s*|\s*\n+\s*)else\s*\n+\s*#[ \t]*get customer info\s*\n+\s*#[ \t]*if customer doesn't exist\s*\n+\s*#[ \t]*get new customer name\s*\n+\s*#[ \t]*insert new customer\s*\n+\s*fi\s*\n+\s*fi\s*\n+\s*fi/.test(scriptFile));
  });
});
