const Pool = require("pg").Pool;

const pool = new Pool({
  connectionString: "postgres://postgres:postgres@database:5432/database",
});

module.exports = pool;
