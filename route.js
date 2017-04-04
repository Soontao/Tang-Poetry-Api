const express = require('express')
const db = require('./db')
const router = express.Router()

router.get('/random', function (req, res, next) {
  db.query('SELECT * FROM `poetry_view` WHERE 1 ORDER BY rand() LIMIT 1', (err, result, field) => {
    if (err)
      next(err);
    else
      res.json(result)
  })
})


module.exports = router