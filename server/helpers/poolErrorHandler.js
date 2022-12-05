const pool = require("../db");

const poolErrorHandler = (sql, handler) => {
  return pool.query(sql, (err, result) => {
    if (err) {
      return console.error("Error executing query", err.stack);
    }

    handler(result);
  });
};

module.exports = poolErrorHandler;
