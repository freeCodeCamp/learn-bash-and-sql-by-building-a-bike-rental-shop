const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the "else" statement with the suggested comments added correctly', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');
    
    assert(/if[\s\S]*![ \t]+\$BIKE_ID_TO_RENT[\s\S]*then[\s\S]*not a valid bike number[\s\S]*else\s*\n+\s*#[ \t]*get bike availability\s*\n+\s*#[ \t]*if not available\s*\n+\s*#[ \t]*send to main menu\s*\n+\s*fi[\s\S]*fi/.test(scriptFile));
  });
});
