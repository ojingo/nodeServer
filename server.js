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
	  // get the PATH from the request
	  var pathname = url.parse(request.url).pathname;
	  
	  // turn on below if you need to see the entire RAW request!
	  // console.log(request);
	  
	  // tell us what pathname was requested
	  console.log("Request for " + pathname + " received.");

	  response.writeHead(200, {"Content-Type": "text/plain"});

	  // now route it ( goes to router.js )
	  // it also sends in handle which is the array of handlers with key value pairing
	  var content = route(handle, pathname)
	  console.log(content);
	  response.write(content);

	  // write something back
	  // response.write("Hello World I am the response!");
	  response.end();
	}
	
	http.createServer(onRequest).listen(8888);
	console.log("Server has started.\n");
	console.log("Server running at http://localhost:8888/");
}

// exporting the function start
exports.start = start;