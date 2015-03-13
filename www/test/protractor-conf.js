var fs = require('fs');
var re = /\S+/;

var myIP = re.exec(fs.readFileSync('/etc/hosts','utf8'))[0];
var driverIP = '172.17.42.1';

exports.config = {
  seleniumAddress: 'http://'+driverIP+':4444/wd/hub',

  allScriptsTimeout: 11000,

  specs: [
    'e2e/*.js'
  ],

  capabilities: {
    'browserName': 'phantomjs',

  /* 
   * Can be used to specify the phantomjs binary path.
   * This can generally be ommitted if you installed phantomjs globally.
   */
    //'phantomjs.binary.path':'./node_modules/phantomjs/bin/phantomjs',


  /*
   * Command line arugments to pass to phantomjs. 
   * Can be ommitted if no arguments need to be passed. 
   * Acceptable cli arugments: https://github.com/ariya/phantomjs/wiki/API-Reference#wiki-command-line-options
   */
    //'phantomjs.cli.args':['--ignore-ssl-errors=true',  '--web-security=false', '--logfile=/root/repo/test_out/e2e.log', '--loglevel=DEBUG']
    'phantomjs.cli.args':['--ignore-ssl-errors=true',  '--web-security=false', '--webdriver-logfile=/root/repo/test_out/e2e.log', '--webdriver-loglevel=DEBUG']

  },

  //chromeOnly: false,

  baseUrl: 'http://'+myIP+':8000/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};