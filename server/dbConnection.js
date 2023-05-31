const { Pool } = require("pg");

// Create a connection pool
const pool = new Pool({
  user: "postgres",
  password: "The7thHorseman",
  host: "localhost",
  port: 5432, // default PostgreSQL port
  database: "fun_space",
});

module.exports = pool;
