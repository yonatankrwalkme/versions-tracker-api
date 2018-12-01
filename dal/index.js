const Sequelize = require('sequelize');
const configValueProvider = require('../services/configValueProvider');

const sequelize = new Sequelize(configValueProvider.getValue('DB_SCHEMA_NAME'), configValueProvider.getValue('DB_USER'), configValueProvider.getValue('DB_PASSWORD'), {
    host: configValueProvider.getValue('DB_HOST'),
    dialect: 'mysql',
    query: {
        raw: true
    },
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    insecureAuth: true
});

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

sequelize.sync();

module.exports = sequelize;