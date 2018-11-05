const buildsRepository = require('../../dal/builds/buildRepository');
const eventHandler = require ('./versionEventHandler');
const versionExtractor = require('../versions/versionExtractors/versionExtractor');
const versionRepository = require('../../dal/versions/versionsRepository');
const featuresNotifier = require('./featuresNotifier');
const bluebird = require('bluebird');

exports.handle = (build) => {
    return buildsRepository.save(build).then(() => {
        const version = versionExtractor.extract(build);
        return versionRepository.save(version).then(() => {
            const promises = [
                eventHandler.handleBuildEvent(version),
                featuresNotifier.checkForFeatureAndNotify(version)
            ];
            return bluebird.promiseAll(promises).then(() => {
                return version;
            });
        })
    });
};