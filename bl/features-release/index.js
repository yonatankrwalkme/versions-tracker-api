const express = require('express');
const router = express.Router();

const featuresReleaseViewModelProvider = require("./featuresReleaseViewModelProvider");

router.get('/', function (req, res, next) {
    const viewModel = featuresReleaseViewModelProvider.provide();
    return res.json(viewModel);
});


module.exports = router;