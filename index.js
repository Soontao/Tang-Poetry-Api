const express = require('express');
const db = require('./db');
const mysqltorest = require('mysql-to-rest');

const server = express();

mysqltorest(server, db)

if (require.main == module)
  server.listen(8080)