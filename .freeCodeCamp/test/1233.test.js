const assert = require('assert');
const { Client } = require('pg');

const database = 'bikes';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('The "bikes" table', () => {
  it('should have all bikes "available"', async () => {
    const query1 = `SELECT bike_id FROM bikes WHERE available=true`;
    const query2 = `SELECT bike_id FROM bikes WHERE available=false`;

    try {
      await client.connect();
      const res1 = await client.query(query1);
      const res2 = await client.query(query2);

      assert(res1.rowCount > 0 && res2.rowCount === 0);
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});
