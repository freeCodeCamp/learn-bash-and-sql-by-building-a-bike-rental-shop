const assert = require('assert');
const { Client } = require('pg');

const database = 'bikes';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('The "bikes" table', () => {
  it('should not have any "BMX" bikes available', async () => {
    const query1 = `SELECT bike_id FROM bikes WHERE available=true AND type='BMX'`;
    const query2 = `SELECT bike_id FROM bikes WHERE available=false AND type<>'BMX'`;
    const query3 = `SELECT bike_id FROM bikes`;

    try {
      await client.connect();
      const res1 = await client.query(query1);
      const res2 = await client.query(query2);
      const res3 = await client.query(query3);

      assert(res1.rowCount === 0 && res2.rowCount === 0 && res3.rowCount > 0);
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});
