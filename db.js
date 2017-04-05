const mysql = require('mysql')
const connect_uri = "mysql://tang_poetry:tang_poetry@mysql.fornever.org/tang_poetry"
const conn = mysql.createPool(connect_uri, (err, db) => {
  if (err) throw err
});

module.exports = conn;