const assert = require('assert');
const { getLastLog } = require('./utils');

describe('You', () => {
  it('should view the suggested data', async () => {
    const lastLog = await getLastLog(true);
    const query = /statement:select(bike_id,type,size|bike_id,size,type|type,bike_id,size|type,size,bike_id|size,bike_id,type|size,type,bike_id)from(bikesinnerjoinrentals|rentalsinnerjoinbikes)using\(bike_id\)innerjoincustomersusing\(customer_id\)where(phone='555-5555'anddate_returnedisnull|date_returnedisnullandphone='555-5555');/i;

    assert(query.test(lastLog) && !/ERROR/.test(lastLog));
  });
});
