const Sequelize = require('sequelize');
const db = require('../index');

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
    environment: {
        type: Sequelize.STRING
    },
    commits: {
      type: Sequelize.STRING
    }
  });

// VersionsModel.sync({force: true});
module.exports = VersionsModel;