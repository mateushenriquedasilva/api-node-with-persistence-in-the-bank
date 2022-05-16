const mariadb = require("mariadb");
const dotenv = require("dotenv");

dotenv.config();

const poll = mariadb.createPool({
  host: "localhost",
  database: "users",
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  port: 3306,
});

module.exports = poll;