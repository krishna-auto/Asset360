// An example configuration file.
exports.config = {
  //directConnect: true,
  seleniumAddress:'http://localhost:4444/wd/hub',

  onPrepare: function(){
    browser.manage().timeouts().implicitlyWait(10000);
},
  
// Single browser parallel execution
   capabilities: {
      'browserName': 'safari',
	  'shardTestFiles': true,
      'maxInstances': 5
    },
  
    framework: 'jasmine',
    specs: [
    './tests/NotificationsTest.js',
    './tests/NotificationsTest.js',
    './tests/NotificationsTest.js',
    './tests/NotificationsTest.js',
    './tests/NotificationsTest.js',   
    ],
    'browserName': 'chrome',

  // Framework to use. Jasmine is recommended.
  //framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  //specs: ['spec4.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },
  
  
};
