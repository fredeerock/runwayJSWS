var img;
var raw = new Image();

var socket = io.connect('http://127.0.0.1:3000');

// Wait until the page is loaded
document.addEventListener("DOMContentLoaded", function(event) {

  // Get the DOM result element
  var result = document.getElementById('result');
  
  // When a connection is established
  socket.on('connect', function() {
    console.log("connected")
  });
  
  // When there is a data event, update the log element
  socket.on('data', function(data) {
      console.log(data);
      raw.src = data.result;
  });
  
});

raw.onload = function() {
    img = createImage(raw.width, raw.height);
    img.drawingContext.drawImage(raw, 0, 0);
}

function setup() {
    createCanvas(800, 600);
    background(100);
}

function draw() {
  if(typeof img !== "undefined") {
    image(img, 0, 0);
  }

  print(get(mouseX, mouseY));
}
