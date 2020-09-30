const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should correctly echo the "AVAILABLE_BIKES" variable', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');

    assert(/AVAILABLE_BIKES[\s\S]*echo[ \t]+"\$AVAILABLE_BIKES"[ \t]*;?\s*$/m.test(scriptFile));
  });
});
