const assert = require('assert');
const { getScriptOutput } = require('./utils');

describe('Your script', () => {
  let scriptOutput1, scriptOutput2, scriptOutput3;
  before(async () => {
    scriptOutput1 = await getScriptOutput('../bike-shop.sh', '1');
    scriptOutput2 = await getScriptOutput('../bike-shop.sh', '2');
    scriptOutput3 = await getScriptOutput('../bike-shop.sh', '3');
  });

  it('should take you to the various menus and ouput the correct text', async () => {
    const re = /~~~~~ Bike Rental Shop ~~~~~/g;
    const titles1 = scriptOutput1.match(re);
    const titles2 = scriptOutput2.match(re);
    const titles3 = scriptOutput3.match(re);

    assert(titles1.length > 1 && titles2.length > 1 && titles3.length > 1);
  });
});
