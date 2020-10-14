const assert = require('assert');
const { getFileContents } = require('./utils');

describe('You', () => {
  it('should echo the suggested text correctly', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');
    
    assert(/get customer info\s*\n+\s*echo[ \t]+-e[ \t]+"\\nWhat's your phone number\?"/.test(scriptFile));
  });
});
