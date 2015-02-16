var compression = require('compression');
var express = require('express');
var server  = express();
var port    = Number(process.env.PORT || 5000);

// Compress all possible responses
server.use(compression());

// Serve static content
server.use(express.static(__dirname));

server.listen(port, function() {
  console.log("Listening on port " + port);
});