exports.notifyVersionChange = function (eventData) {
    console.log('socket.io - trying to send to clients');
    io.emit('versionEvent', eventData);
    return Promise.resolve();
};

exports.deadManWalkingEvent = function (build) {
    io.emit('deadManWalking', build);
    return Promise.resolve();
};

exports.notifyBetaStatusChange = function (eventData) {
    io.emit('betaStatusChange', eventData);
    return Promise.resolve();
};
