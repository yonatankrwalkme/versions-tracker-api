const Sequelize = require('sequelize');
const db = require('./index');

const VersionsModel = db.define('versions', {
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

// VersionsModel.sync({force: true});
module.exports = VersionsModel;