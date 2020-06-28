// Karma configuration

module.exports = function (config) {
  config.set({
    basePath: '',

    frameworks: ['jasmine'],

    files: [
      'test/*.[sS]pec.js',
    ],

    preprocessors: {
      'dist/*.js': ['coverage'],
      'test/**/*.[sS]pec.js': ['webpack'],
    },

    reporters: ['progress', 'coverage'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Chrome'],

    singleRun: false,

    webpack: {
      mode: 'production'
    },

    concurrency: Infinity,

    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    }
  });
}