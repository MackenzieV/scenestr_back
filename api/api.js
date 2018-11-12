'use strict'

const Sequelize = require('sequelize');
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const Event = require('../models/events.js').Event


let app = express();

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", 'GET, POST, DELETE, PATCH');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); next();
});

module.exports = app;
