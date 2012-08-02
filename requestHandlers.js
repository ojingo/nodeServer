// the request handlers!
// now add require for a new node module called child_process that executes a shell from within this process
// var exec = require("child_process").exec;
// require fs which lets you deal with filesystem stuffs
// require formidable the formupload module for node

var querystring = require("querystring"),
	fs = require("fs");
	formidable = require("formidable");


// start URL request...
function startpage(response) {

// new upload interface!
// pressing the button activates action /upload 

console.log("Request handler 'start' was called.");

  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" '+
    'content="text/html; charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" enctype="multipart/form-data" '+
    'method="post">'+
    '<input type="file" name="upload">'+
    '<input type="submit" value="Upload file" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();

}

// a upload URL request...
function upload(response, request) {
  console.log("Request handler 'upload' was called.");

  var form = new formidable.IncomingForm();
  console.log("about to parse");
  form.parse(request, function(error, fields, files) {
    console.log("parsing done");

    /* Possible error on Windows systems:
       tried to rename to an already existing file */
    fs.rename(files.upload.path, "./tmp/test.png", function(err) {
      if (err) {
        fs.unlink("./tmp/test.png");
        fs.rename(files.upload.path, "./tmp/test.png");
      }
    });
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("received image:<br/>");
    response.write("<img src='/show' />");
    response.end();
  });
}

// show for uploads

function show(response, postData) {
  console.log("Request handler 'show' was called.");
  
  fs.readFile("./tmp/test.png", "binary", function(error, file) {
    if(error) {
      response.writeHead(500, {"Content-Type": "text/plain"});
      response.write(error + "\n");
      response.end();
    } else {
      response.writeHead(200, {"Content-Type": "image/png"});
      response.write(file, "binary");
      response.end();
    }
  });
}

// nothing more than a test

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
exports.show = show;
exports.test = test;