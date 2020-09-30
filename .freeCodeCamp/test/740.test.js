const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your "EXIT_MENU" function', () => {
  let scriptFile;
  before(async () => {
    scriptFile = await getFileContents('../bike-shop.sh');
  });

  it('should echo the correct text', async () => {
    assert(/(function\s+)?SHOW_TITLE[ \t]*\([ \t]*\)\s*{\s*clear\s*echo[ \t]+-e[ \t]+('|"|)~~~~~ Bike Rental Shop ~~~~~\\n\2\s*}/.test(scriptFile));
  });
});
