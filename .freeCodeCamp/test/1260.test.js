/*const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your "RENT_MENU" function', () => {
  let scriptFile;
  before(async () => {
    scriptFile = await getFileContents('../bike-shop.sh');
  });

  it('should correctly read input into a "BIKE_ID_TO_RENT" variable', async () => {
    const rentMenuFunction = scriptFile.match(/RENT_MENU\s*\(\s*\)\s*{[\s\S]+?[^}]}/g)[0];

    const test1 = /CUSTOMER_NAME=\$\(\$PSQL[ \t]+"[ \t]*SELECT[ \t]+name[ \t]+FROM[ \t]+customers[ \t]+WHERE[ \t]+phone[ \t]*=[ \t]*'\$PHONE_NUMBER'[ \t]*;?"[ \t]*\)/i.test(rentMenuFunction)
    const test2 = /CUSTOMER_NAME/.test(rentMenuFunction)
    const test3 = /\$PHONE_NUMBER/.test(rentMenuFunction);

    assert(test1 && test2 && test3);
  });
});*/
