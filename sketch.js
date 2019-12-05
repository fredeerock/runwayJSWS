var img;
var raw = new Image();

// Make sure ip and port match in Runway
var socket = io.connect('http://127.0.0.1:3000');

// Load all the DOM elements first
document.addEventListener("DOMContentLoaded", function(event) {
  
  // Let us know when a connection is established
  socket.on('connect', function() {
    console.log("connected")
  });
  
  // Wehn data is sent update the raw source. Sometimes this is data.output instead.
  socket.on('data', function(data) {
      console.log(data);
      raw.src = data.result;
      // raw.src = data.output;
  });
});

raw.onload = function() {
    img = createImage(raw.width, raw.height);
    img.drawingContext.drawImage(raw, 0, 0);
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(100);
}

function draw() {
  if(typeof img !== "undefined") {
    image(img, 0, 0);
  }

  print(get(mouseX, mouseY));
}
