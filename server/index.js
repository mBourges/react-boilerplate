/* eslint consistent-return:0 */
/* eslint-disable no-console, strict */
'use strict';

const Hapi = require('hapi');
const middlewares = require('./configuration/middlewares');
const Logger = require('./configuration/logger');
const generateRoutes = require('./routes');
const server = new Hapi.Server();

server.connection({
  host: process.env.IP,
  port: process.env.PORT,
  routes: {
    cors: true
  }
});

server.register(middlewares, error => {
  if (error) {
    return server.error(['Server', 'Start'], error);
  }

  generateRoutes(server);

  server.start(err => {
    if (err) {
      return console.log('server', err);
    }

      Logger.appStarted(process.env.PORT);

  });
});
