const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  let scriptFile;
  before(async () => {
    scriptFile = await getFileContents('../bike-shop.sh');
  });

  it('should have a "RETURN_MENU" function', async () => {
    assert(/(function\s+)?RETURN_MENU[ \t]*\([ \t]*\)\s*{\s*}/.test(scriptFile));
  });
});
