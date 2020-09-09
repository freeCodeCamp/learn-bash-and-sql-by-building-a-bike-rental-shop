const assert = require('assert');
const { getLastQueryResult } = require('./utils');

describe('You', () => {
  it('should display the details of "bikes"', async () => {
    const lastQueryResult = await getLastQueryResult();

    assert(/Table"public\.bikes"/.test(lastQueryResult));
  });
});
