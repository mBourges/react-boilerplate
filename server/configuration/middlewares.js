/* eslint-disable no-console,strict,prefer-template */
'use strict';

const Inert = require('inert');
const Logger = require('./logger');

let middlewares = [
  Logger.configuration,
  Inert
];

module.exports = middlewares;
