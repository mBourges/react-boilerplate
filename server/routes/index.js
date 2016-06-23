/* eslint-disable no-console, strict */
'use strict';

const defaultRoute = require('./default');

let todos = [{
  Title: 'First Todo',
  Completed: false
}, {
  Title: 'Second Todo',
  Completed: true
}];

module.exports = function createRoute(server) {
  defaultRoute(server);

  server.route({
    method: 'GET',
    path: '/api/todos',
    handler: (request, reply) => {
      reply(todos);
    }
  });
};