// the request handlers!
// now add require for a new node module called child_process that executes a shell from within this process
var exec = require("child_process").exec;

// start URL request...
function startpage(response) {

// new upload interface!
// pressing the button activates action /upload 

console.log("Request handler 'start' was called.");

  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();

}

// a upload URL request...
function upload(response, postData) {
  console.log("Request handler 'upload' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("You've sent: " + postData);
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