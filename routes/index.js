module.exports = function (app) {
    // app.use('/', () => res.render('index', { title: 'Express' }));
    app.use('/versions', require('../bl/versions'));
    app.use('/builds', require('../bl/builds'));
};