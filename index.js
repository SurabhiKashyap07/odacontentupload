var fs = require('fs');
var express = require('express');

var app = express();
app.post('/', function (req, res, next) {
  console.log(JSON.stringify(req.headers));
  req.pipe(fs.createWriteStream('./'+req.headers['file-name']));
  req.on('end', next);
});

app.listen(4000);