var io = require('socket.io')();

io.on('connection', (client) => {
      console.log('client connected');
  });

var port = 8000;
io.listen(port);
console.log('listening on port ', port);

module.exports = io;