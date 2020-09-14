const assert = require('assert');
const { getFileContents} = require('./utils');

describe('Your script', () => {
  it('should echo the suggested output', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');
    
    assert(/^\s*echo[ \t]+-e[ \t]+('|")\\n~~~~~ Bike Rental Shop ~~~~~\\n\1[ \t]*;?\s*$/m.test(scriptFile));
  });
});
