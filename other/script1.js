// Create a connection to the Runway HTTP Server
// You should select Camera from the Input Panel
// *You should update this address to match the URL provided by the app
var socket = io.connect('http://127.0.0.1:3000');

// Wait until the page is loaded
document.addEventListener("DOMContentLoaded", function(event) {

  // Get the DOM log element
  var status = document.getElementById('status');
  var log = document.getElementById('log');
  
  // When a connection is established
  socket.on('connect', function() {
    status.innerHTML = 'Connected';
  });
  
  // When there is a data event, update the log element
  socket.on('data', function(data) {
    console.log(data);
    log.innerHTML = data.result;
  });
});