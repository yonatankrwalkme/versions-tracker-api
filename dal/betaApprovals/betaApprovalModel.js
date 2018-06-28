const Sequelize = require('sequelize');
const db = require('../index');

const betaApprovals = db.define('betaApprovals', {
    versionId: {
      type: Sequelize.STRING
    },
    committer: {
        type: Sequelize.STRING
    },
    status: {
        type: Sequelize.INTEGER
    },
  });

// betaApprovals.sync({force: true});
module.exports = betaApprovals;