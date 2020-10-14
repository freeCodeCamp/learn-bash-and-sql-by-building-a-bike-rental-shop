/*const assert = require('assert');
const { Client } = require('pg');

const database = 'bikes';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('You', () => {
  it('should run your script with "./bike-shop.sh"', async () => {
    const query = `SELECT * FROM customers WHERE phone='555-5555';`;

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
});*/
