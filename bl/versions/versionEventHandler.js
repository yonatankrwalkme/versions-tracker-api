const bluebird = require('bluebird');
const clientEventsEmitter = require ('../eventsManager/clientEventsEmitter');
const versionInitEventHandler = require('./versionEventHandler/versionInitEventHandler');
const versionCompleteEventHandler = require('./versionEventHandler/versionCompleteEventHandler');
const versionBetaEventHandler = require('./versionEventHandler/versionBetaEventHandler');
const versionFailedEventHandler = require('./versionEventHandler/versionFailedEventHandler');

exports.handleBuildEvent = function (version) {
    return bluebird.all([
        clientEventsEmitter.notifyVersionChange(version),
        versionInitEventHandler.handle(version),
        versionFailedEventHandler.handle(version),
        versionBetaEventHandler.handle(version),
        versionCompleteEventHandler.handle(version)
    ]).then((results) => {
        return results;
    }).error((error) => {
        return error
    })
};