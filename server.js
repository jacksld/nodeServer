const http = require('http'); // Import Node.js core module to create a web server

const server = http.createServer(function (req, res) { // Create a web server
  // Check the URL of the current request
  if (req.url == '/') { 
    // Set response header
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // Set response content for the home page
    res.write('<html><body><p>This is home Page.</p></body></html>');
    res.end(); // End the response
  }
  else if (req.url == "/student") {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // Set response content for the student page
    res.write('<html><body><p>This is student Page.</p></body></html>');
    res.end(); // End the response
  }
  else if (req.url == "/admin") {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // Set response content for the admin page
    res.write('<html><body><p>This is admin Page.</p></body></html>');
    res.end(); // End the response
  }
  else if (req.url == "/data") {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    // Set response content for the data page
    res.write(JSON.stringify({ message: "Hello World JSON" }));
    res.end(); // End the response
  }
  else {
    res.end('Invalid Request!'); // Respond with an error message for invalid requests
  }
});

server.listen(8000); // The server listens on port 8000 for incoming requests

console.log('Node.js web server at port 8000 is running..'); // Log message to indicate the server is running

