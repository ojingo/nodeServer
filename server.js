// requires you to load the http module that comes with Node
// requires you to load the url modeule that comes with Node

var http = require("http");
var url = require("url");

// annonymous function that is part of an async loop cycle
// on any request incoming send in the request and response
// then compile a respose and spit it back out!
// accepts route as incoming parameter 

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    route(handle, pathname, response, request); // notice this part keeps growing - sending it 4 objects now
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

// exporting the function start
exports.start = start;