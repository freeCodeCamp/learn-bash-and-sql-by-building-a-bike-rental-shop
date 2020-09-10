const assert = require('assert');
const { getLastQueryResult } = require('./utils');

describe('You', () => {
  it('should display the details of the "rentals" table', async () => {
    const lastQueryResult = await getLastQueryResult();

    assert(/Table"public\.rentals"/.test(lastQueryResult));
  });
});
