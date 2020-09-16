/*const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your "MAIN_MENU" function', () => {
  let scriptFile;
  before(async () => {
    scriptFile = await getFileContents('../bike-shop.sh');
  });

  it('should echo the correct text', async () => {
    const mainMenuFunction = scriptFile.match(/MAIN_MENU\s*\(\s*\)\s*{[\s\S]+?[^}]}/g)[0];

    assert(/echo[ \t]+('|"|)How may I help you\?\1/.test(mainMenuFunction));
  });
});*/
