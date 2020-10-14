const assert = require('assert');
const { getLastLog } = require('./utils');

describe('You', () => {
  it('should view all the data in the suggested tables', () => {
    const lastLog = await getLastLog(true);
    const query = /statement:select\*from(bikesinnerjoinrentals|rentalsinnerjoinbikes)using\(bike_id\)innerjoincustomersusing\(customer_id\)where(customer_id=\d+anddate_returnedisnull|date_returnedisnullandcustomer_id=\d+);/i;

    assert(query.test(lastLog) && !/ERROR/.test(lastLog));
  });
});
