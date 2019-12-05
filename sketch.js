var img;
var raw = new Image();

// Make sure ip and port match in Runway
var socket = io.connect('http://127.0.0.1:3000');
  
// Let us know when a connection is established
socket.on('connect', function() {
  console.log("connected")
});

// When data is sent update the raw source. Sometimes this is data.output instead.
socket.on('data', function(data) {
    console.log(data);
    raw.src = data.result;
    // raw.src = data.output;
});

// Wait for the image data to load then draw it to canvas.
raw.onload = function() {
  img = createImage(raw.width, raw.height);
  img.drawingContext.drawImage(raw, 0, 0);
}

// Begin normal p5 stuff.
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(100);
}

function draw() {

  // Don't try to draw the image before it's loaded.
  if(typeof img !== "undefined") {
    image(img, 0, 0);
  }

}
