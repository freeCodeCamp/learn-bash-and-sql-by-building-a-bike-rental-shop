const assert = require('assert');
const { Client } = require('pg');

const database = 'bikes';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('You', () => {
  it('should run your script and rent the bike with "bike_id" 1', async () => {
    const query = `SELECT * FROM bikes WHERE bike_id=1 AND available=false;`;

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
