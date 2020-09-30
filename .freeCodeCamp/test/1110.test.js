const assert = require('assert');
const { getFileContents } = require('./utils');

describe('You', () => {
  it('should correctly print the suggested variable', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');

    assert(/bikes we have available:('|")([ \t]*;\s*|\s*\n+\s*)echo[ \t]+"\$AVAILABLE_BIKES"([ \t]*;\s*|\s*\n*\s*)$/m.test(scriptFile) && scriptFile.match(/echo[ \t]+"\$AVAILABLE_BIKES"/g).length === 1);
  });
});
