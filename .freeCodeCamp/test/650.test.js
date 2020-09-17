/*const assert = require('assert');
const { getFileContents } = require('./utils');

describe('You', () => {
  let scriptFile;
  before(async () => {
    scriptFile = await getFileContents('../bike-shop.sh');
  });

  it('should read user input into a "MAIN_MENU_SELECTION" variable', async () => {
    const mainMenuFunction = scriptFile.match(/MAIN_MENU\s*\(\s*\)\s*{[\s\S]+?[^}]}/g)[0];

    assert(/read[ \t]+MAIN_MENU_SELECTION\s+/.test(mainMenuFunction));
  });
});*/
