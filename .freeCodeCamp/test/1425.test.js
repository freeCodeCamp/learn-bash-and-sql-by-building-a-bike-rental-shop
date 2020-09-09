const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('You', () => {
  it('should enter the suggested command in the terminal', async () => {
    const lastCommand = await getLastCommand(0, false);

    assert(/^\s*echo\s+"\$\(\s*echo\s+('|") M e \1\s*\|\s*sed\s+('|")s\/ \/\/g\2;?\s*\)\.\s*"\s*$/.test(lastCommand));
  });
});
