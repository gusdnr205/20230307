const mysql2 = require("mysql2/promise");

const mysql = mysql2.createPool({
  user : "root",
  password : "12341234",
  database : "test0",
  multipleStatements : true,
  host : "127.0.0.1"
})

module.exports = mysql;