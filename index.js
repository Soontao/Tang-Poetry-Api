const express = require('express');
const db = require('./db');
const mysqltorest = require('mysql-to-rest');
const not_found = require('./util').not_found;
const enhance_routes = require('./route');

const server = express();
const port = process.env.PORT || 3414;

server.use("/api", enhance_routes)

mysqltorest(server, db)

server.use(not_found)

if (require.main == module)
  server.listen(port)