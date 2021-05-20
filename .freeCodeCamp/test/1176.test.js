const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the suggested "if" statement added correctly', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');
    
    assert(/BIKE_ID_TO_RENT[\s\S]*if input is not a number\s*\n+\s*if[ \t]+\[\[[ \t]+![ \t]+\$BIKE_ID_TO_RENT[ \t]+=~[ \t]+\^\[0-9\]\+\$[ \t]+\]\]([ \t]*;\s*|\s*\n+\s*)then\s*#[ \t]*send to main menu\s*\n+\s*fi[\s\S]*fi/.test(scriptFile));
  });
});
