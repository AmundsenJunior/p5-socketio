// Keep track of our socket connection
var socket;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  // Start a socket connection to the server
  // Some day we would run this server somewhere else
  socket = io.connect('http://localhost:8080');

  // We make a named event called 'mouse' and write an anonymous callback fxn
  socket.on('mouse', function (data) {
    // Draw a blue circle
    fill(0,0,255);
    noStroke();
    ellipse(data.x, data.y, 80, 80);
  }); 
}

function draw() {
}

function mouseDragged() {

  // Draw some white circles
  fill(255);
  noStroke();
  ellipse(mouseX, mouseY, 80, 80);

  // Send the mouse coordinates
  sendMouse(mouseX, mouseY);
}

// Function for sending to the socket
function sendMouse(xpos, ypos) {

  // We are sending!
  console.log("sendMouse: " + xpos + " " + ypos);

  // Make a little object with mouseX and mouseY
  var data = {
    x: mouseX,
    y: mouseY
  };

  // Send that object to the socket
  socket.emit('mouse', data);
}

