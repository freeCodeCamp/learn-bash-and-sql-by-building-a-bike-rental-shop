const assert = require('assert');
const { Client } = require('pg');

const database = 'bikes';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('The "bikes" table', () => {
  it('should have a row for a 27 inch Road Bike"', async () => {
    const query = `SELECT * FROM bikes WHERE type='Road' AND size=27;`;

    try {
      await client.connect();
      const res = await client.query(query);

      assert(res.rows.length >= 1);
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});
