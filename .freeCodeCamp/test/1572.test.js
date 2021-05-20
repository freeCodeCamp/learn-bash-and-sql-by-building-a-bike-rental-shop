const assert = require('assert');
const { getFileContents } = require('./utils');

describe('You', () => {
  it('should correctly print the suggested text', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');

    assert(/display rented bikes\s*\n+\s*echo[ \t]+-e[ \t]+('|")\\nHere are your rentals:\1/.test(scriptFile));
  });
});
