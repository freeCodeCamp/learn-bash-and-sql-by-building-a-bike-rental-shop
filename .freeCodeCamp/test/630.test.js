const assert = require('assert');
const { getScriptOutput } = require('./utils');

describe('Your script', () => {
  let scriptOutput;
  before(async () => {
    scriptOutput = await getScriptOutput('../bike-shop.sh');
  });

  it('should display the correct "MAIN_MENU" options', async () => {
    assert(/1. Rent a bike\n2. Return a bike\n3. Exit/.test(scriptOutput));
  });
});
