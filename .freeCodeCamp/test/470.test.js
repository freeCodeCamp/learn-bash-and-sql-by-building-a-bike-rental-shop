const assert = require('assert');
const { getScriptOutput } = require('./utils');

describe('Your script', () => {
  let scriptOutput;
  before(async () => {
    scriptOutput = await getScriptOutput('bash ../bike-shop.sh');
  });

  it('should echo the suggested output', async () => {
    assert(/~~~~~ Bike Rental Shop ~~~~~/.test(scriptOutput));
  });
});
