const assert = require('assert');
const { Client } = require('pg');

const database = 'bikes';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('The "rentals" table', () => {
  it('should have a column named "date_returned" with the correct properties', async () => {
    const query1 = `SELECT column_name FROM INFORMATION_SCHEMA.COLUMNS WHERE table_schema = 'public' AND table_name = 'rentals' AND column_name = 'date_returned' AND data_type = 'date';`;

    try {
      await client.connect();
      const res1 = await client.query(query1);

      assert(res1.rows.length >= 1);
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});
