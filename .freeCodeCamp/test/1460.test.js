const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your "RENT_MENU" function', () => {
  let scriptFile;
  before(async () => {
    scriptFile = await getFileContents('../bike-shop.sh');
  });

  it('should correctly read input into a "BIKE_ID_TO_RENT" variable', async () => {
    const returnMenuFunction = scriptFile.match(/RETURN_MENU\s*\(\s*\)\s*{[\s\S]+?[^}]}/g)[0]

    assert(/echo[ \t]+"What's your phone number\?"/.test(rentMenuFunction));
  });
});
