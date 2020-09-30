const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your "MAIN_MENU" function', () => {
  let scriptFile;
  before(async () => {
    scriptFile = await getFileContents('../bike-shop.sh');
  });

  it('should have the correct if condition and statements', async () => {
    assert(/if[ \t]+\[\[[ \t]+\$1[ \t]+\]\](;[ \t]*|\s*\v+)then\s+echo[ \t]+-e[ \t]+('|"|)\$1\\n\2(;[ \t]*|\s+\v+)fi/.test(scriptFile));
  });
});
