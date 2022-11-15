const { config } = require('./wdio.conf');
const AndroidInfo = require('./android.info');
const path = require('path');

// Appium capabilities
config.capabilities = [
    {
        path: '/wd/hub',
        platformName: 'Android',
        autoGrantPermissions: true,
        autoAcceptAlerts: true,
        automationName: 'flutter',
        deviceName: AndroidInfo.deviceName1(),
        platformVersion: AndroidInfo.platFormVersion1(),
        app: path.resolve(`./apps/${AndroidInfo.appName1()}`)
    }
];

// config.cucumberOpts.tagExpression = '@androidApp'; // pass tag to run tests specific to android
config.sync = true;
config.port = 4723;

config.services = [
   'appium'
];

config.appium = {
    command: 'appium',
    args: {},
};

config.path = '/wd/hub';

config.specs = [
        './features/**/login.feature',
];


config.cucumberOpts = {
    require: [
        './features/step-definitions/*.js'
    ],
};

exports.config = config;
