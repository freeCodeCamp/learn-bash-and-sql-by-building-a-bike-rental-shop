const assert = require('assert');
const { getFileContents } = require('./utils');

describe('You', () => {
  let scriptFile;
  before(async () => {
    scriptFile = await getFileContents('../bike-shop.sh');
  });

  it('should add the "-e" flag to your greeting', async () => {
    assert(/echo[ \t]+-e[ \t]+('|")\\nHow may I help you\?\\n\1/.test(scriptFile));
  });
});
