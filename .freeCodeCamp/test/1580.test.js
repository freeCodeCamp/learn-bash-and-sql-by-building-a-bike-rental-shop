const assert = require('assert');
const { getFileContents } = require('./utils');

describe('You', () => {
  it('should correctly add the suggested loop', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');

    assert(/echo[ \t]+"\$CUSTOMER_RENTALS"[ \t]*\|\s*while\s+read[ \t]+BIKE_ID[ \t]+BAR[ \t]+TYPE[ \t]+BAR[ \t]+SIZE([ \t]*;\s*|\s*\n+\s*)do\s+echo[ \t]+"\$BIKE_ID\) \$SIZE\\" \$TYPE Bike"([ \t]*;\s*|\s*\n+\s*)done/.test(scriptFile));
  });
});
