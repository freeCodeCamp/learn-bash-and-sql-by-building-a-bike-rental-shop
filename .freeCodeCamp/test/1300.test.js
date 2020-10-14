const assert = require('assert');
const { getLastCommand } = require('./utils');
const { Client } = require('pg');

const database = 'bikes';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('You', () => {
  it('should run your script by executing it', async () => {
    const lastCommand = await getLastCommand();
    const query = `SELECT customer_id FROM customers WHERE phone = '555-5555' AND name = 'Me'`;

    try {
      await client.connect();
      const res = await client.query(query);

      assert(res.rowCount > 0 && lastCommand[0] === './bike-shop.sh' && (lastCommand[1] === undefined || lastCommand[1].op === ';'));
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});
