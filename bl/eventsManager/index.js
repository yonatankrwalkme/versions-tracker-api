var io = require('socket.io')();

io.on('connection', (client) => {
      console.log('client connected');
  });

function versionChangesNotifier () {
    var notifyVersionChange = (version) => {
        io.emit('versionChange', version);
    }

    return {
        notifyVersionChange : notifyVersionChange
    }
};

var port = 8000;
io.listen(port);
console.log('listening on port ', port);

module.exports = versionChangesNotifier;