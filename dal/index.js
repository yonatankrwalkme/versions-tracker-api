const Sequelize = require('sequelize');

const sequelize = new Sequelize('versions_manager', 'versionsManager', 'versionsManager', {
    // host: 'db',
    host: 'localhost',
    dialect: 'mysql',
  
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
