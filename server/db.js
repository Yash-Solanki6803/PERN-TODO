module.require("dotenv").config();

const Pool = require("pg").Pool;

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

pool.connect((err) => {
  if (err) throw err;
  console.log("Connected to Database successfully");
});

module.exports = pool;
