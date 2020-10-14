const assert = require('assert');
const { getFileContents } = require('./utils');

describe('You', () => {
  it('should correctly print the suggested text', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');

    assert(/ask for bike to return\s*\n+\s*echo[ \t]+-e[ \t]+('|")\\nWhich one would you like to return\?\1/.test(scriptFile));
  });
});
