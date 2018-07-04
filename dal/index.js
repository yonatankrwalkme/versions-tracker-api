const Sequelize = require('sequelize');
const configValueProvider = require('../services/configValueProvider');

const sequelize = new Sequelize(configValueProvider.getValue('dbSchemaName'), configValueProvider.getValue('dbUser'), configValueProvider.getValue('dbPassword'), {
    host: configValueProvider.getValue('dbHost'),
    dialect: 'mysql',
    query: {raw: true},
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
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
