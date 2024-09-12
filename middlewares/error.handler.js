function logErrors (err, req, res, next) {
  console.log("log error");
  console.error(err) //SHOWS ERROR AN CONTINUE
  next(err)
}


function errorHandler (err, req, res, next){
  console.log("error handler");
  console.err(err)
  res.status(500).json({
    message: err.message,
    stack: err.stack
  })
}


module.exports = {logErrors, errorHandler}
