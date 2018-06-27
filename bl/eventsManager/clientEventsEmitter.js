const io = require('./index');

exports.notifyVersionChange = function (eventData) {
    io.emit('versionEvent', eventData);
    return Promise.resolve();
};

exports.notifyBetaStatusChange = function (eventData) {
    io.emit('betaStatusChange', eventData);
    return Promise.resolve();
};
