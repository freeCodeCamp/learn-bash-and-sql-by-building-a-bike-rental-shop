const assert = require('assert');
const { Client } = require('pg');

const database = 'bikes';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('The "bikes" table', () => {
  it('should have a row for 28 and 29 inch Road bikes', async () => {
    const query1 = `SELECT * FROM bikes WHERE type='Road' AND size=28;`;
    const query2 = `SELECT * FROM bikes WHERE type='Road' AND size=29;`;

    try {
      await client.connect();
      const res1 = await client.query(query1);
      const res2 = await client.query(query2);

  	  assert(res1.rows.length > 0 && res2.rows.length > 0);
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});
