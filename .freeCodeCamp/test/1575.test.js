const assert = require('assert');
const { getFileContents } = require('./utils');

describe('You', () => {
  it('should move the code to the suggested location', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');

    assert(/Here are your rentals:('|")([ \t]*;\s*|\s*\n+\s*)echo[ \t]+"\$CUSTOMER_RENTALS"/.test(scriptFile) && scriptFile.match(/\$CUSTOMER_RENTALS/g).length < 3);
  });
});
