'use strict'

exports.config = {
  directConnect: true,

  allScriptsTimeout: 110000, // Changing both allScriptsTimeout and defaultTimeout to 10000 from 80000

  specs: [
    'test/e2e/*.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:3000',

  framework: 'jasmine2',

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 110000
  },

  onPrepare: function () {
    var jasmineReporters = require('jasmine-reporters')
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
      consolidateAll: true,
      savePath: 'build/reports/e2e_results'
    }))
  }
}
