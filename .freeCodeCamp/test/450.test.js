const assert = require('assert');
const { getLastCommand, getDirectoryContents } = require('./utils');

describe('You', () => {
  it('should use "touch" to create "bike-shop.sh"', async () => {
    const projectDirectory = await getDirectoryContents('..');
    const lastCommand = await getLastCommand();

    assert(projectDirectory.indexOf('bike-shop.sh') >= 0 && lastCommand[0] === 'touch' && /bike-shop\.sh$/.test(lastCommand[1]));
  });
});
