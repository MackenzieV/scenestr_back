'use strict'

const Sequelize = require('sequelize');

const sequelize = require('../db/connection.js').sequelize;

const Event = sequelize.define('event', {
  user_id: {
    type: Sequelize.BIGINT(11),
    primaryKey: true,
    allowNull: false
  },
  title: {
    type: Sequelize.STRING(45),
    allowNull: false
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false
  },
  cost: {
    type: Sequelize.BIGINT(11),
    allowNull: false
  },
  description: {
    type: Sequelize.STRING(300),
    allowNull: false
  },
  keywords: {
    type: Sequelize.STRING(100),
    allowNull: false
  },
}, {
  timestamps: false
});

module.exports = {
  Event
}
