var express = require('express');
var router = express.Router();
const eventsManager =  require('../bl/eventsManager/index');
const buildRepository = require('../dal/buildRepository');
const versionsProvider = require('../bl/versions/versionsProvider');

router.get('/', function (req, res, next) {
    versionsProvider.provide().then((versions) => {
        res.json(versions);
    })
});

router.get('/notifyChange', function (req, res, next) {
    console.log('notifyingChange');
    eventsManager.notifyVersionChange(versions_data[0]);
    res.json("OK");
})

module.exports = router;