const express = require('express');
const router = express.Router();
const clientEventsEmitter = require ('../eventsManager/clientEventsEmitter');
const versionsProvider = require('./versionsProvider');
const incomingBuildHandler = require('./incomingBuildHandler');
const approvalFlowHandler = require ('../betaApprovalsManager/approvalFlowHandler');
const featureNotifier = require('./featuresNotifier');

router.post('/', function (req, res, next) {
    const build = req.body;
    return incomingBuildHandler.handle(build).then((version) => {
        res.json(version);
    });
});

router.get('/respondToApprovalLink', (req,res, next) => {
    return approvalFlowHandler.handle(req).then((response) => {
        res.json(response);
    });
});

router.post('/dead-man-walking', (req,res, next) => {
    const build = req.body;
    return clientEventsEmitter.deadManWalkingEvent(build).then(() => {
        res.json("OK");
        next();
    });
});

router.get('/user-migrated', (req,res, next) => {
    const email = req.query.email;
    return clientEventsEmitter.userMigratedEvent(email).then(() => {
        res.json("OK");
        next();
    });
});

router.post('/new-feature-deployed', (req,res, next) => {
    const build = req.body;
    return featureNotifier.checkForFeatureAndNotify(build).then(() => {
        res.json("OK");
    });
});

router.get('/', function (req, res, next) {
    return versionsProvider.provide().then((versions) => {
        res.json(versions);
    })
});

module.exports = router;