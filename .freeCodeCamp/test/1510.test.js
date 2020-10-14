const assert = require('assert');
const { getLastLog } = require('./utils');

describe('You', () => {
  it('should view all the data in the suggested tables', async () => {
    const lastLog = await getLastLog(true);
    const query = /statement:select\*from(bikesinnerjoinrentals|rentalsinnerjoinbikes)using\(bike_id\)innerjoincustomersusing\(customer_id\)where(phone='555-5555'anddate_returnedisnull|date_returnedisnullandphone='555-5555');/i;

    assert(query.test(lastLog) && !/ERROR/.test(lastLog));
  });
});
