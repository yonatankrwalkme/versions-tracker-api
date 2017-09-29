const Sequelize = require('sequelize');
const db = require('./index');

const BuildModel = db.define('builds', {
    projectName: {
      type: Sequelize.STRING
    },
    buildStatus: {
      type: Sequelize.STRING
    },
    commitsData: {
      type: Sequelize.STRING
    },
    versionData : {
      type: Sequelize.STRING
    }

  });
  
module.exports = BuildModel;