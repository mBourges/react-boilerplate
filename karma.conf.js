// Karma configuration
// Generated on Mon Jun 20 2016 06:08:53 GMT+0000 (UTC)
const configEnv = { test: true };
const webpackConfig = require('./webpack.test.config')(configEnv);
const testGlob = 'app/**/*.test.js';
const srcGlob = 'app/**/*!(test|stub).js';

process.env.BABEL_ENV = 'test';

module.exports = function(config) {
  config.set({
    hostname: process.env.IP || 'localhost',
    port: '8082',
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [
      './node_modules/es6-promise/dist/es6-promise.js',
      './node_modules/babel-polyfill/dist/polyfill.min.js',
      testGlob,
      srcGlob
    ],
    exclude: [
      'app/reducer.js',
      'app/routes.js',
      'app/store.js',
      'app/index.js'
    ],
    preprocessors: {
      [testGlob]: ['webpack'],
      [srcGlob]:  ['webpack']
    },
    webpack: webpackConfig,
    webpackMiddleware: { noInfo: true },
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      reporters: [
        {type: 'lcov', dir: 'coverage', subdir: '.'},
        {type: 'json', dir: 'coverage', subdir: '.'},
        {type: 'text-summary'},
      ]
    },
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity
  })
}
