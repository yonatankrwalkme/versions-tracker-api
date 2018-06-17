module.exports = function (app) {
    app.use('/versions', require('../bl/versions'));
};