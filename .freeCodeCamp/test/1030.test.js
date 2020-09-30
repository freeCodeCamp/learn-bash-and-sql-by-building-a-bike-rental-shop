/*const assert = require('assert');
const { Client } = require('pg');

const database = 'bikes';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('You', () => {
  it('should set "available" to "false" for all the bikes with the psql prompt', async () => {
    const query = "SELECT * FROM bikes WHERE available='t';"

    try {
      await client.connect();
      const res = await client.query(query);

      assert(res.rowCount === 0);
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});*/
