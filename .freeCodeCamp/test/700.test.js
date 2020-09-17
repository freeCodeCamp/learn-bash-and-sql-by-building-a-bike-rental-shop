const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  let scriptFile;
  before(async () => {
    scriptFile = await getFileContents('../bike-shop.sh');
  });

  it('should have an empty "EXIT" function', async () => {
    assert(/(function\s+)?EXIT[ \t]*\([ \t]*\)\s*{\s*}/.test(scriptFile));
  });
});
