module.exports = function (app) {
    app.use('/versions', require('../bl/versions'));
    app.use('/', (req, res, next) => {
        res.json("ok");
    });
};