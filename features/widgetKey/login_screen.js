const find = require('appium-flutter-finder');

class LoginScreen {
    static counterTextFinder = find.byValueKey('counter');
    static buttonFinder = find.byValueKey('increment');
    static btnLewatiSplashScreen = find.byValueKey('btnLewatisplashscreen');
}

module.exports = LoginScreen;