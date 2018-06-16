var express = require('express');
var router = express.Router();
const buildsRepository = require('../../dal/buildRepository');
const eventHandler = require ('../eventsManager/eventsHandler');
const versionExtractor = require('../versions/versionExtractors/versionExtractor');
const versionRepository = require('../../dal/versionsRepository');

router.post('/', function (req, res, next) {
    const build = req.body;
    return buildsRepository.save(build).then(() => {
        const version = versionExtractor.extract(build);
        return versionRepository.save(version).then(() => {
            // eventHandler.handleBuildEvent(build);
            res.json(version);
        })
    })
});

module.exports = router;