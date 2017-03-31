const express = require('express');
const db = require('./db');
const mysqltorest = require('mysql-to-rest');

const server = express();
const port = process.env.PORT || 3414;

mysqltorest(server, db)

server.use(function (req, res, next) {
  res.json({
    error: "not found",
    server: "tang poetry api server"
  })
})

if (require.main == module)
  server.listen(port)