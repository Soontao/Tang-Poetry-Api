const mysql = require('mysql')
const connect_uri = "mysql://tang_poetry:tang_poetry@mysql.fornever.org/tang_poetry"
const conn = mysql.createConnection(connect_uri, (err, db) => {
  if (err) throw err
});

conn.connect();

// -----------------------

// query db every every 5 hours, to avoid db connection lost

function keep_alive() {
  conn.query("select 1;")
}

setInterval(keep_alive, 5 * 3600 * 1000)

// -----------------------

module.exports = conn;