const assert = require('assert');
const { getFileContents } = require('./utils');

describe('You', () => {
  it('should correctly add the suggested "while" loop', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');

    assert(/else[\s\S]*echo[ \t]+"\$AVAILABLE_BIKES"[ \t]*\|\s*while\s+read[ \t]+BIKE_ID[ \t]+BAR[ \t]+TYPE[ \t]+BAR[ \t]+SIZE([ \t]*;\s*|\s*\n+\s*)do\s+echo[ \t]+("|)\$BIKE_ID[ \t]+\$TYPE[ \t]+\$SIZE\2([ \t]*;\s*|\s*\n+\s*)done[\s\S]*fi/.test(scriptFile));
  });
});
