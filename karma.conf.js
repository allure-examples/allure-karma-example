module.exports = function(config) {
  config.set({

    //Typical Karma config
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'src/*.js',
      'test/*.js'
    ],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    captureTimeout: 60000,
    singleRun: false,

    //You need add allure to your test reporters
    reporters: ['progress', 'allure'],
    //Allure reporter settings.
    //You can change xml files with tests result location
    allureReport: {
        reportDir: 'report'
    }
  });
};
