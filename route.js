const express = require('express')
const db = require('./db')
const router = express.Router()

// sql

const random_sql = `
SELECT
	poetry_view.*
FROM
	poetry_view
JOIN (
	SELECT
		ROUND(
			RAND() * 43030
		) AS rand_num
) AS tmp
WHERE
	poetry_view.poetry_id = tmp.rand_num
`

// router

router.get('/random', function (req, res, next) {
  db.query(random_sql, (err, result, field) => {
    if (err)
      next(err);
    else
      res.json(result)
  })
})


module.exports = router