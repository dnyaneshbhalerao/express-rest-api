var express = require ('express');
var bodyParser = require('body-parser');
var path = require('path');
var server = express();

server.use(bodyParser.json({limit: '50mb'}));
server.use(bodyParser.urlencoded({limit: '50mb', extended: false }));
server.use(express.static(path.resolve(".") + '/build'));
server.get('/', function(req, res) {
  res.send('hello world');
});

module.exports = server;