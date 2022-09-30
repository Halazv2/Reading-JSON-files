const mysql = require('mysql');
const conn = mysql.createConnection({
 host: "localhost",
 user: "root",
 password: "",
 database: "json-crack",
});

conn.connect();

module.exports = conn;