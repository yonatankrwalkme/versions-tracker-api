const io = require('./index');

exports.notifyVersionChange = function (versionEvent) {
    io.emit('versionEvent', versionEvent);
};