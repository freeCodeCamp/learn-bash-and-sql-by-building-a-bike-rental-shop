/*const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your "RENT_MENU" function', () => {
  let scriptFile;
  before(async () => {
    scriptFile = await getFileContents('../bike-shop.sh');
  });

  it('should correctly read input into a "BIKE_ID_TO_RENT" variable', async () => {
    const rentMenuFunction = scriptFile.match(/RENT_MENU\s*\(\s*\)\s*{[\s\S]+?[^}]}/g)[0]

    const test1 = /BIKE_AVAILABILITY=\$\(\$PSQL[ \t]+"[ \t]*SELECT[ \t]+available[ \t]+FROM[ \t]+bikes[ \t]+WHERE[ \t]+bike_id[ \t]*=[ \t]*\$BIKE_ID_TO_RENT[ \t]*;?"[ \t]*\)/i.test(rentMenuFunction)
    const test2 = /BIKE_AVAILABILITY/.test(rentMenuFunction)
    const test3 = /\$BIKE_ID_TO_RENT/.test(rentMenuFunction);

    assert(test1 && test2 && test3);
  });
});*/
