const assert = require('assert');
const { getFileContents } = require('./utils');

describe('You', () => {
  let scriptFile;
  before(async () => {
    scriptFile = await getFileContents('../bike-shop.sh');
  });

  it('should add the correct case statement to your "MAIN_MENU" function', async () => {
    assert(/sleep 2[^m]s?/.test(scriptFile));
  });
});
