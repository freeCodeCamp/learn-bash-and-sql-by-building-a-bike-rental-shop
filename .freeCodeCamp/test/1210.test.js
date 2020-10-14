const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your "RENT_MENU" function', () => {
  let scriptFile;
  before(async () => {
    scriptFile = await getFileContents('../bike-shop.sh');
  });

  it('should have the correct catch for when a bike is not available', async () => {
    const rentMenuFunction = scriptFile.match(/RENT_MENU\s*\(\s*\)\s*{[\s\S]+?[^}]}/g)[0]
    
    assert(/if\s+\[\[\s+(\$BIKE_AVAILABILITY[ \t]*==[ \t]*"f"[ \t]*\|\|[ \t]+-z[ \t]*\$BIKE_AVAILABILITY|-z[ \t]*\$BIKE_AVAILABILITY[ \t]*\|\|[ \t]*\$BIKE_AVAILABILITY[ \t]*==[ \t]*"f")[ \t]+\]\](([ \t]*;\s*)|\s*(?=\n+)\s*)then\s+MAIN_MENU[ \t]+"That bike is not available\."(([ \t]*;\s*)|\s*(?=\n+)\s*)fi/.test(rentMenuFunction));
  });
});
