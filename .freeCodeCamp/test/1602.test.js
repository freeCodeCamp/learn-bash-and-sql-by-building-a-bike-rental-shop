const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the suggested "if" statement added correctly', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');
    
    assert(/BIKE_ID_TO_RETURN[\s\S]*if not a number\s*\n+\s*if[ \t]+\[\[[ \t]+![ \t]+\$BIKE_ID_TO_RETURN[ \t]+=~[ \t]+\^\[0-9\]\+\$[ \t]+\]\]([ \t]*;\s*|\s*\n+\s*)then\s*#[ \t]*send to main menu\s*\n+\s*fi([ \t]*;\s*|\s*\n+\s*)fi([ \t]*;\s*|\s*\n+\s*)fi/.test(scriptFile));
  });
});
