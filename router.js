// this is the router module which routes based on URL pathname requests
// it exports route() as a function!


function route(handle, pathname) {
  console.log("About to route a request for " + pathname);
   // now it checks handle[pathname] and compares it to type function if true it pulls that keypair from the 
   // array and adds a function execution () at the end! triggering handle[pathname]()
   if (typeof handle[pathname] === 'function') {
    // now we pass thru response and do not return!
    handle[pathname](response);
  } else {
    console.log("No request handler found for " + pathname);
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("404 Not found");
    response.end();
  }
}

// exporting route!
exports.route = route;