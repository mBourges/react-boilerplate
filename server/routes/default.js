const StaticFolder = require('../configuration/staticFolder');

module.exports = function createRoute(server) {
  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: StaticFolder
      }
    }
  });
};
