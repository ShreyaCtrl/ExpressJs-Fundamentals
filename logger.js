const middle = (request, response, next) => {
  const method = request.method;
  const url = request.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  // when adding a middleware do not forget to pass it to the next middleware or terminate the chain by sending response
  next();
};

module.exports = middle;