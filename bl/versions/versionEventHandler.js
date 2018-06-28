const bluebird = require('bluebird');
const clientEventsEmitter = require ('../eventsManager/clientEventsEmitter');
const versionInitCompleteEventHandler = require('./versionEventHandler/versionInitCompleteEventHandler');
const versionBetaEventHandler = require('./versionEventHandler/versionBetaEventHandler');

exports.handleBuildEvent = function (build) {
    return bluebird.all([
        clientEventsEmitter.notifyVersionChange(build),
        versionInitCompleteEventHandler.handle(build),
        versionBetaEventHandler.handle(build)
    ]).then((results) => {
        return results;
    }).error((error) => {
        return error
    })
};