const emitter = require ('./versionEventsEmitter');

exports.handleBuildEvent = function (build) {
    const versionEvent = build;
    emitter.notifyVersionChange(versionEvent);
};

function extractCommitters(commits) {
    return commits.map((commitData) => {
        return commitData.username
    });
}