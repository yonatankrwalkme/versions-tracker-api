const Sequelize = require('sequelize');
const db = require('./index');

const BuildModel = db.define('builds', {
    buildData: {
      type: Sequelize.STRING
    }
  });

// BuildModel.sync({force: true});
module.exports = BuildModel;