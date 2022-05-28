const server = require("./index");

server
  .listen(3000, "0.0.0.0")
  .then(function () {
    console.log(`Server is now listening on 0.0.0.0:3000`);
  })
  .catch((err) => {
    console.log(err);
  });