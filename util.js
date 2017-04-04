

function not_found(req, res, next) {
  res.json({
    error: "not found",
    server: "tang poetry api server"
  })
}

module.exports = {
  not_found
}