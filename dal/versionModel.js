const Sequelize = require('sequelize');
const db = require('./index');

const BuildModel = db.define('versions', {
    projectName: {
      type: Sequelize.STRING
    },
    versionId: {
        type: Sequelize.STRING
    },
    status: {
      type: Sequelize.STRING
    },
    commitsData: {
      type: Sequelize.STRING
    },
    versionData : {
      type: Sequelize.STRING
    }
  });

BuildModel.sync({force: true});
module.exports = BuildModel;