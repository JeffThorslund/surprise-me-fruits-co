const Pool = require("pg").Pool;

const databaseHost = process.env.DATABASE_HOST || "localhost";

console.log(databaseHost);

const pool = new Pool({
  connectionString: `postgres://postgres:postgres@${databaseHost}:5432/database`,
});

module.exports = pool;
