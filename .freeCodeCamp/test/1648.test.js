const assert = require('assert');
const { getFileContents } = require('./utils');

describe('You', () => {
  it('should use "echo" to print the suggested line correctly', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');
    
    assert(/You do not have that bike rented\.('|")([ \t]*;\s*|\s*\n+\s*)else\s+echo[ \t]+("|)Rental ID \$RENTAL_ID found\3([ \t]*;\s*|\s*\n+\s*)fi([ \t]*;\s*|\s*\n+\s*)fi([ \t]*;\s*|\s*\n+\s*)fi([ \t]*;\s*|\s*\n+\s*)fi/.test(scriptFile));
  });
});
