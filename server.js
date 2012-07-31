// requires you to load the http module that comes with Node
// requires you to load the url modeule that comes with Node

var http = require("http");
var url = require("url");

// annonymous function that is part of an async loop cycle
// on any request incoming send in the request and response
// then compile a respose and spit it back out!
// accepts route as incoming parameter 

function start(route, handle) {
	// 
	var postData = "";
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    request.setEncoding("utf8");

    request.addListener("data", function(postDataChunk) {
      postData += postDataChunk;
      console.log("Received POST data chunk '"+
      postDataChunk + "'.");
    });

    request.addListener("end", function() {
      route(handle, pathname, response, postData);
    });

	  
	}
	
	http.createServer(onRequest).listen(8888);
	console.log("Server has started.\n");
	console.log("Server running at http://localhost:8888/");
}

// exporting the function start
exports.start = start;