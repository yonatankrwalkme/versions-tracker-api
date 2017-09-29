const emitter = require ('./versionEventsEmitter');

exports.handleBuildEvent = function (build) {
    const versionEvent = build;
    emitter.notifyVersionChange(versionEvent);
}

function extractCommitters(commitsData) {
    return commitsData.map((commitData) => {
        return commitData.username
    });
}