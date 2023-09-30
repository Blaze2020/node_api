// config/database.js
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "password",
  database: "schema",
});

module.exports = connection;
