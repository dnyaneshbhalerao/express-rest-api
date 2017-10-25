var appServer = require('../server');
var http = require('http');

var port = process.env.PORT || '4000';
appServer.set('port', port);

var server = http.createServer(appServer);

server.listen(appServer.get('port'),function () {
  console.log('Express server listening on port ' + appServer.get('port'));
});
server.on('listening', onListening);
server.on('error', onError);

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }
  var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  var addr = server.address();
  console.log('ready to go! ' + addr.port);
}
