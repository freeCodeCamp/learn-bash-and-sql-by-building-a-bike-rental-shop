const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your "EXIT" function', () => {
  it('should echo the correct text', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');

    assert(/(function[ \t]+EXIT|EXIT[ \t]*\([ \t]*\))\s*{\s*echo[ \t]+-e[ \t]+('|")\\nThank you for stopping in\.\\n\2[ \t]*;?\s*}/.test(scriptFile));
  });
});
