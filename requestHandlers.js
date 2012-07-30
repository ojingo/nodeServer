// the request handlers!
// now add require for a new node module called child_process that executes a shell from within this process
var exec = require("child_process").exec;

// start URL request...
function startpage(response) {

// this now runs another shell? that executes on its own and won't block?	
  console.log("Request handler 'start' was called.");
  // now we use a response with the non block but also can come back when done?
  exec("ls -lah", function (error, stdout, stderr) {
  	response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(stdout);
    response.end();
  });
}

// a upload URL request...
function upload(response) {
	console.log("Request handler 'upload' was called.");
	// 
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello Upload");
	response.end();
}

function test(response) {
	console.log("Testing handler 'test' was called.");
	// 
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello Test!");
	response.end();
}

// exporting these functions so they are available to the others who require this handler.js
exports.startpage = startpage;
exports.upload = upload;
exports.test = test;