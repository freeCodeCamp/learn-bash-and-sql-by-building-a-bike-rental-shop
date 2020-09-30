/*const assert = require('assert');
const { getFileContents, getScriptOutput } = require('./utils');

describe('You', () => {
  let scriptFile, scriptOutput;
  before(async () => {
    scriptFile = await getFileContents('../bike-shop.sh');
    scriptOutput = await getScriptOutput('../bike-shop.sh', '1');
  });

  it('should add the correct flag to your psql command', async () => {
    const rentMenuFunction = scriptFile.match(/RENT_MENU\s*\(\s*\)\s*{[\s\S]+?[^}]}/g)[0];
    const correctFlag = /(--tuples-only|-t)/.test(rentMenuFunction);
    const correctOutput = !/(bike_id|type|size|available|rows)/.test(scriptOutput);
    
    assert(correctFlag && correctOutput);
  });
});*/
