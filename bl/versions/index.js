const express = require('express');
const router = express.Router();
const eventsManager =  require('../eventsManager/index');
const versionsProvider = require('./versionsProvider');
const incomingBuildHandler = require('./incomingBuildHandler');

router.post('/', function (req, res, next) {
    const build = req.body;
    return incomingBuildHandler.handle(build).then((version) => {
        res.json(version);
    });
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