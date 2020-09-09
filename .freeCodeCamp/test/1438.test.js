const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('You', () => {
  it('should enter the suggested command in the terminal', async () => {
    const lastCommand = await getLastCommand(0, false);

    assert(/^\s*echo\s+"\$\(\s*echo\s+('|")\s\s\sM e\s\s\s\1\s*\|\s*sed\s+(-r|-E|--regexp-extended)\s+('|")s\/(\^ \*\| \*\$| \*\$\|\^ \*)\/\/g\3;?\s*\)\.\s*"\s*$/.test(lastCommand));
  });
});
