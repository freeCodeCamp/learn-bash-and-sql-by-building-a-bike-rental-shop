const assert = require('assert');
const { Client } = require('pg');

const database = 'bikes';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('The "bikes" table', () => {
  it('should have a row for 19, 20, and 21 inch BMX bikes', async () => {
    const query1 = `SELECT * FROM bikes WHERE type='BMX' AND size=19;`;
    const query2 = `SELECT * FROM bikes WHERE type='BMX' AND size=20;`;
    const query3 = `SELECT * FROM bikes WHERE type='BMX' AND size=21;`;

    try {
      await client.connect();
      const res1 = await client.query(query1);
      const res2 = await client.query(query2);
      const res3 = await client.query(query3);

  	  assert(res1.rows.length > 0 && res2.rows.length > 0 && res3.rows.length > 0);
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});
