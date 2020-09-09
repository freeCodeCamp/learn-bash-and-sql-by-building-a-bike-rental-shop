const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your "RENT_MENU" function', () => {
  it('should echo the suggested text', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');
    
    assert(/done([ \t]*;\s*|\s*\n+\s*)#[ \t]*ask for bike to rent\s*\n+\s*echo[ \t]+-e[ \t]+('|")\\nWhich one would you like to rent\?\2/.test(scriptFile));
  });
});
