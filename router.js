// this is the router module which routes based on URL pathname requests
// it exports route() as a function!


function route(handle, pathname) {
  console.log("About to route a request for " + pathname);
   // now it checks handle[pathname] and compares it to type function if true it pulls that keypair from the 
   // array and adds a function execution () at the end! triggering handle[pathname]()
   if (typeof handle[pathname] === 'function') {
    return handle[pathname]();
  } else {
    console.log("No request handler found for " + pathname);
    return "404 NOT FOUND!";
  }
}

// exporting route!
exports.route = route;