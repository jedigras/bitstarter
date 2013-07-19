var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

var buf = new Buffer("");

fs.readFile('index.html', function (err, data) {
  if (err) {
        throw err;
    }
  //put the data in our buf variable
  buf = data;
});

app.get('/', function(request, response) {
    response.send(buf.toString());
//  response.send('Hello World2!');
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
