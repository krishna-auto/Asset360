
// An example configuration file.
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

onPrepare: function(){
browser.manage().timeouts().implicitlyWait(10000);
},
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
  //'browserName': 'chrome', 
  'browserName': 'safari',
  
  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['./tests/NotificationsTest.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },

  
} 
}
