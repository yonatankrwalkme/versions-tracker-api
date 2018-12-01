module.exports = function (app) {
    app.use('/versions', require('../bl/versions'));
    app.use('/features-release', require('../bl/features-release'));
    app.use('/', (req, res, next) => {
        res.json("ok");
    });
};