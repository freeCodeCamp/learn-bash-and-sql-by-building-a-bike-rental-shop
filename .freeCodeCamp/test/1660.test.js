const assert = require('assert');
const { getFileContents } = require('./utils');

describe('You', () => {
  it('should use "echo" to print the suggested line correctly', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');
    
    assert(!/Rental ID/.test(scriptFile) && !/RENTAL_ID found/.test(scriptFile) && /else\s+fi/.test(scriptFile));
  });
});
