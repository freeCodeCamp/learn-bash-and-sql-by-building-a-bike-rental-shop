/*const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your "RENT_MENU" function', () => {
  let scriptFile;
  before(async () => {
    scriptFile = await getFileContents('../bike-shop.sh');
  });

  it('should pipe the "AVAILABLE" bikes variable to the correct "while" loop', async () => {
    const rentMenuFunction = scriptFile.match(/RENT_MENU\s*\(\s*\)\s*{[\s\S]+?[^}]}/g)[0]
    
    assert(/echo "\$AVAILABLE_BIKES"[ \t]+\|[ \t]+while\s+read[ \t]+BIKE_ID[ \t]+BAR1[ \t]+TYPE[ \t]+BAR2[ \t]+SIZE(([ \t]*;\s*)|\s*(?=\n+)\s*)do\s+echo[ \t]+("|)\$BIKE_ID[ \t]+\$TYPE[ \t]+\$SIZE\3(([ \t]*;\s*)|\s*(?=\n+)\s*)done/.test(rentMenuFunction));
  });
});*/
