const assert = require('assert');
const { getScriptOutput } = require('./utils');

const { Client } = require('pg');

const database = 'bikes';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('You', () => {
  let scriptOutput;
  before(async () => {
    scriptOutput = await getScriptOutput('../bike-shop.sh', '1', '6', '55555555', 'Tom');
  });;

  it('should run your script with "./bike-shop.sh"', async () => {
    const query = `SELECT * FROM customers WHERE phone='55555555';`;
    const query2 = `DELETE FROM customers WHERE phone='55555555';`;

    try {
      await client.connect();
      const res1 = await client.query(query);
      await client.query(query2);

      assert(res1.rows.length >= 1);
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});
