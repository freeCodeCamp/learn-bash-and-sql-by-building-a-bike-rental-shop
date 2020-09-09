const assert = require('assert');
const { getLastQueryResult } = require('./utils');

describe('You', () => {
  let lastQueryResult;
  before(async () => {
    lastQueryResult = await getLastQueryResult();
  });

  it('should display the details of the "customers" table', () => {
    assert(/Table"public\.customers"/.test(lastQueryResult));
  });
});
