const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your "RENT_MENU" function', () => {
  let scriptFile;
  before(async () => {
    scriptFile = await getFileContents('../bike-shop.sh');
  });

  it('should echo the correct text', async () => {
    assert(/(function\s+)?RENT_MENU[ \t]*\([ \t]*\)\s*{\s*echo[ \t]+('|"|)Rent menu\2\s*}/.test(scriptFile));
  });
});
