// the request handlers!
// now add require for a new node module called child_process that executes a shell from within this process
var exec = require("child_process").exec;

// start URL request...
function startpage() {

// this now runs another shell? that executes on its own and won't block?	
  console.log("Request handler 'start' was called.");
  var content = "empty";

  exec("ls -lah", function (error, stdout, stderr) {
    content = stdout;
  });

  return content;
}

// a upload URL request...
function upload() {
	console.log("Request handler 'upload' was called.");
	return "Uploading";
}

function test() {
	console.log("Testing handler 'test' was called.");
	return "Testing";
}

// exporting these functions so they are available to the others who require this handler.js
exports.startpage = startpage;
exports.upload = upload;
exports.test = test;