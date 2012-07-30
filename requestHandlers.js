// the request handlers!

// start URL request...
function startpage() {
	
	function sleep(milliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds);
	}

	sleep(10000);
	return "Hello Start";
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