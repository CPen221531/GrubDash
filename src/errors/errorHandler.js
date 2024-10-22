function errorHandler(error, request, response, next) {
  // console.error(error);  // Uncomment this line to log errors (if needed)
  const { status = 500, message = "Something went wrong!" } = error;
  response.status(status).json({ error: message });
}

module.exports = errorHandler;