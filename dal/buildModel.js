const Sequelize = require('sequelize');
const db = require('./index');

const BuildModel = db.define('builds', {
    application: {
      type: Sequelize.STRING
    },
    deployStatus: {
      type: Sequelize.INTEGER
    },
    buildData: {
      type: Sequelize.STRING
    },

  });
  
module.exports = BuildModel;