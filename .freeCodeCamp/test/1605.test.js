const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should call the "MAIN_MENU" function with the suggested argument correctly', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');
    
    assert(/BIKE_ID_TO_RETURN[\s\S]*then[\s\S]*MAIN_MENU[ \t]+('|")That is not a valid bike number\.\1([ \t]*;\s*|\s*\n+\s*)fi([ \t]*;\s*|\s*\n+\s*)fi([ \t]*;\s*|\s*\n+\s*)fi/.test(scriptFile));
  });
});
