const assert = require('assert');
const { getLastLog } = require('./utils');

describe('You', () => {
  it('should view all the data in the suggested tables', async () => {
    const lastLog = await getLastLog(true);
    const query = /statement:select\*from(rentalsinnerjoincustomers|customersinnerjoinrentals)using\(customer_id\)where(phone='.*[^']'andbike_id=('|)\d+\3anddate_returnedisnull|phone='.*[^']'anddate_returnedisnullandbike_id=('|)\d+\3|bike_id=('|)\d+\3andphone='.*[^']'anddate_returnedisnull|bike_id=('|)\d+\3anddate_returnedisnullandphone='.*[^']'|date_returnedisnullandbike_id=('|)\d+\3andphone='.*[^']'|date_returnedisnullandphone='.*[^']'andbike_id=('|)\d+\3);/i;

    assert(query.test(lastLog) && !/ERROR/.test(lastLog));
  });
});
