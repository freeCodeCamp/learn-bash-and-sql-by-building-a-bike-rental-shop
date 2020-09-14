const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  let scriptFile;
  before(async () => {
    scriptFile = await getFileContents('../bike-shop.sh');
  });

  it('should have the correct "shebang"', async () => {
    assert(/^#! \/bin\/bash/.test(scriptFile));
  });
});