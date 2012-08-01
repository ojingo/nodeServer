// the base index.js file - this requires the use of server.js
// and it requires the use of router.js

var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

// now the associative object array that gets passed in ( like a dictionary! )
var handle = {}
handle["/"] = requestHandlers.startpage;
handle["/start"] = requestHandlers.startpage;
handle["/start/"] = requestHandlers.startpage;
handle["/upload"] = requestHandlers.upload;
handle["/upload/"] = requestHandlers.upload;
handle["/test"] = requestHandlers.test;
handle["/test/"] = requestHandlers.test;
handle["/show"] = requestHandlers.show;

// then it uses the exported function of start()
// and sends in a parameter of router.route 
server.start(router.route, handle);