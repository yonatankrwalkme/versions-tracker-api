var express = require('express');
var router = express.Router();
const buildsRepository = require('../dal/buildRepository');
const eventHandler = require ('../bl/eventsManager/eventsHandler');

router.post('/', function (req, res, next) {
    const build = req.body;
    buildsRepository.save(build).then(() => {
        eventHandler.handleBuildEvent(build);
        res.json("OK");
    })
});

module.exports = router;