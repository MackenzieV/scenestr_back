'use strict'
// constructer function pulling from sequelize module
const Sequelize = require('sequelize');

// connection to SQL database
const sequelize = new Sequelize({
  database: 'events',
  username: 'root',
  password: 'Deepweb1',
  dialect: 'mysql'
});

module.exports = {
  sequelize
}
