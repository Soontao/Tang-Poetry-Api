const express = require('express');
const db = require('./db');
const mysqltorest = require('mysql-to-rest');

const server = express();
const port = process.env.PORT || 3414;

mysqltorest(server, db)

if (require.main == module)
  server.listen(port)