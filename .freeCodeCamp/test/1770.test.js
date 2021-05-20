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
    const query1 = `SELECT rental_id FROM rentals WHERE date_returned IS NULL`;
    const query2 = `SELECT bike_id FROM bikes WHERE available = false`;

    try {
      await client.connect();
      const res1 = await client.query(query1);
      const res2 = await client.query(query2);

      assert(res1.rowCount === 0 && res2.rowCount === 0 && lastCommand[0] === './bike-shop.sh' && (lastCommand[1] === undefined || lastCommand[1].op === ';'));
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});
