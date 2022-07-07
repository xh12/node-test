var http = require("http");

//create a server object:
http
  .createServer(async function (req, res) {
    // res.write(await demo());
    res.write("aaaa");
    // res.write("Hello World!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
