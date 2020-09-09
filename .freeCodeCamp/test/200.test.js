const assert = require('assert');
const { Client } = require('pg');

const database = 'bikes';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('The "customers" table', () => {
  it('should have a column named "name" with the correct properties', async () => {
    const query1 = `SELECT column_name FROM INFORMATION_SCHEMA.COLUMNS WHERE table_schema = 'public' AND is_nullable = 'NO' AND table_name = 'customers' AND column_name = 'name' AND data_type = 'character varying' AND character_maximum_length = 40;`;

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
