const assert = require('assert');
const { getScriptOutput, getLastLog } = require('./utils');

const { Client } = require('pg');

const database = 'bikes';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('You', () => {
  let scriptOutput, lastLog;
  before(async () => {
    scriptOutput = await getScriptOutput('../bike-shop.sh', '1', '6', '55555555', 'Tom');
    lastLog = await getLastLog(true);
  });;

  it('should run your script with "./bike-shop.sh"', async () => {
    const query = `DELETE FROM customers WHERE phone='55555555';`;

    try {
      await client.connect();
      await client.query(query);
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }

    const select = /statement:SELECTcustomer_idFROMcustomersWHEREphone='55555555';?/i;
    assert(select.test(lastLog));
  });
});
