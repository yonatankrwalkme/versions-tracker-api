const express = require('express');
const router = express.Router();
const eventsManager =  require('../eventsManager/index');
const versionsProvider = require('./versionsProvider');
const buildsRepository = require('../../dal/buildRepository');
const eventHandler = require ('../eventsManager/eventsHandler');
const versionExtractor = require('../versions/versionExtractors/versionExtractor');
const versionRepository = require('../../dal/versionsRepository');

router.post('/', function (req, res, next) {
    const build = req.body;
    return buildsRepository.save(build).then(() => {
        const version = versionExtractor.extract(build);
        return versionRepository.save(version).then(() => {
            eventHandler.handleBuildEvent(build);
            res.json(version);
        })
    })
});

router.get('/', function (req, res, next) {
    versionsProvider.provide().then((versions) => {
        res.json(versions);
    })
});

router.get('/notifyChange', function (req, res, next) {
    console.log('notifyingChange');
    eventsManager.notifyVersionChange(versions_data[0]);
    res.json("OK");
});

module.exports = router;