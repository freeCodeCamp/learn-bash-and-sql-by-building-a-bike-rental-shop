const assert = require('assert');
const { Client } = require('pg');

const database = 'bikes';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('The "bikes" database', () => {
  it('should have a table named "rentals"', async () => {
    const query = 'SELECT * FROM rentals;'

    try {
      await client.connect();
      const res = await client.query(query);
      assert(!!res);
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});
