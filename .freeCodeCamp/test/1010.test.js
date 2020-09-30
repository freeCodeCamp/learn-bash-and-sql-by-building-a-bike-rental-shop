/*const assert = require('assert');
const { getFileContents, getScriptOutput } = require('./utils');

describe('You', () => {
  let scriptFile, scriptOutput;
  before(async () => {
    scriptFile = await getFileContents('../bike-shop.sh');
    scriptOutput = await getScriptOutput('../bike-shop.sh', '1');
  });

  it('should add the correct flag to your psql command', async () => {
    const availableBikesVariable = scriptFile.match(/[ \t]+AVAILABLE_BIKES(.*)/g)[0];
    const test1 = /select[ \t]+.*from[ \t]+bikes[ \t]+where[ \t]+available[ \t]*=[ \t]*'(t|true)'/i.test(availableBikesVariable);
    const test2 = /bike_id/i.test(availableBikesVariable);
    const test3 = /type/i.test(availableBikesVariable);
    const test4 = /size/i.test(availableBikesVariable);
    const test5 = scriptOutput.length > 150;

    assert(test1 && test2 && test3 && test4 && test5);
  });
});*/
