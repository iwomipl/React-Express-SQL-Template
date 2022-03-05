const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'template_express_plus_react_data_base',
  decimalNumbers: true,
  namedPlaceholders: true,
});

module.exports = {
  pool,
};
