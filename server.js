var http = require('http'),
    url = require('url'),
    path = require('path'),
    fs = require('fs');

var server = http.createServer(handleRequest);
server.listen(8080);

console.log("Server started on port 8080");

function handleRequest(req, res) {
  // what did we request?
  var pathname = req.url;

  // If blank let's ask for index.html
  if (pathname == '/') {
    pathname = '/index.html';
  }

  // Ok what's our file extension
  var ext = path.extname(pathname);

  // Map extension to file type
  var typeExt = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css'
  };

  // What is it? Default to plain text
  var contentType = typeExt[ext] || 'text/plain';

  // User file system module
  fs.readFile(__dirname + pathname, function (err, data) {
    // if there is an error
    if (err) {
      res.writeHead(500);
      return res.end('Error loading ' + pathname);
    }
    //Otherwise, send the data, the contents of the file
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
}

// WebSocket Portion
// WebSockets work with the HTTP server
var io = require('socket.io').listen(server, {origins: '*:*'});

// Register a callback function to run when we have an identical connection
// This is run for each individual user that connects
io.sockets.on('connection', function (socket) {
  // And we are given a websocket object in our function

  console.log("We have a new client: " + socket.id);

  // When this user emits, client-side: socket.emit('otherevent', some data);
  socket.on('mouse', function(data) {
    // Data comes in as whatever was sent, including objects
    // Send it to all other clients
    socket.broadcast.emit('mouse', data);

    // This is a way to send to everyone including sender
    // io.sockets.emit('message', "this goes to everyone");
  });

  socket.on('disconnect', function() {
    console.log("Client " + socket.id + " has disconnected.");
  });

});


