const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your "RENT_MENU" function', () => {
  let scriptFile;
  before(async () => {
    scriptFile = await getFileContents('../bike-shop.sh');
  });

  it('should correctly read input into a "BIKE_ID_TO_RENT" variable', async () => {
    const rentMenuFunction = scriptFile.match(/RENT_MENU\s*\(\s*\)\s*{[\s\S]+?[^}]}/g)[0]
    
    assert(/if\s+\[\[\s+-z[ \t]+\$CUSTOMER_NAME[ \t]+\]\](([ \t]*;\s*)|\s*(?=\n+)\s*)then\s+echo[ \t]+-e[ \t]+"What's your name\?"(([ \t]*;\s*)|\s*(?=\n+)\s*)fi/.test(rentMenuFunction));
  });
});
