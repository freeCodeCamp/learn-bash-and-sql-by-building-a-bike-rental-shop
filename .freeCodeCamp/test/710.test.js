const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your "EXIT_MENU" function', () => {
  let scriptFile;
  before(async () => {
    scriptFile = await getFileContents('../bike-shop.sh');
  });

  it('should echo the correct text', async () => {
    assert(/echo[ \t]+('|"|)Thank you for stopping in\.\1/.test(scriptFile));
  });
});
