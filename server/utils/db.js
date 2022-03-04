const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'batabase_name',
  decimalNumbers: true,
  namedPlaceholders: true,
});

module.exports = {
  pool,
};
