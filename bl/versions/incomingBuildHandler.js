const buildsRepository = require('../../dal/builds/buildRepository');
const eventHandler = require ('./versionEventHandler');
const versionExtractor = require('../versions/versionExtractors/versionExtractor');
const versionRepository = require('../../dal/versions/versionsRepository');

exports.handle = (build) => {
    return buildsRepository.save(build).then(() => {
        const version = versionExtractor.extract(build);
        return versionRepository.save(version).then(() => {
            return eventHandler.handleBuildEvent(version).then(() => {
                return version;
            });
        })
    });
};