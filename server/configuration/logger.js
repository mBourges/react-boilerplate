/* eslint-disable no-console,prefer-template */
const Good = require('good');
const chalk = require('chalk');
const ip = require('ip');

const divider = chalk.gray('\n-----------------------------------');

const configuration = {
  register: Good,
  options: {
    reporters: {
      console: [{
        module: 'good-squeeze',
        name: 'Squeeze',
        args: [{
          log: '*',
          response: '*'
        }]
      }, {
        module: 'good-console'
      },
      'stdout']
    }
  }
};

function appStarted(port, tunnelStarted) {
  console.info('Server started ' + chalk.green('✓'));

  // If the tunnel started, log that and the URL it's available at
  if (tunnelStarted) {
    console.info('Tunnel initialised ' + chalk.green('✓'));
  }

  console.info(
    chalk.bold('\nAccess URLs:') +
    divider +
    '\nLocalhost: ' + chalk.magenta('http://localhost:' + port) +
    '\n      LAN: ' + chalk.magenta('http://' + ip.address() + ':' + port) +
    (tunnelStarted ? '\n    Proxy: ' + chalk.magenta(tunnelStarted) : '') +
      divider,
      chalk.blue('\nPress ' + chalk.italic('CTRL-C') + ' to stop\n')
    );
}

module.exports = {
  configuration,
  appStarted
};
