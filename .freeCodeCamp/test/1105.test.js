const assert = require('assert');
const { getFileContents } = require('./utils');

describe('You', () => {
  it('should correctly print the suggested text', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');

    assert(/else\s*\n+\s*#[ \t]*display available bikes\s*\n+\s*echo[ \t]+-e[ \t]+('|")\\nHere are the bikes we have available:\1/.test(scriptFile));
  });
});
