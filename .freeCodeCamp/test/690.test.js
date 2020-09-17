const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your "RETURN_MENU" function', () => {
  let scriptFile;
  before(async () => {
    scriptFile = await getFileContents('../bike-shop.sh');
  });

  it('should echo the correct text', async () => {
    assert(/(function\s+)?RETURN_MENU[ \t]*\([ \t]*\)\s*{\s*echo[ \t]+('|"|)Return menu\2\s*}/.test(scriptFile));
  });
});
