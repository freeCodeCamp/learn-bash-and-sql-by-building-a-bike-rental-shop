const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your "RENT_MENU" function', () => {
  let scriptFile;
  before(async () => {
    scriptFile = await getFileContents('../bike-shop.sh');
  });

  it('should pipe the "AVAILABLE" bikes variable to the correct "while" loop', async () => {
    assert(false);
  });
});
