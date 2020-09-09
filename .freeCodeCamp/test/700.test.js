const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have an empty "EXIT" function', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');
    
    assert(/}\s*(function[ \t]+EXIT|EXIT[ \t]*\([ \t]*\))\s*{\s*}[ \t]*;?\s*MAIN_MENU\s*$/.test(scriptFile));
  });
});
