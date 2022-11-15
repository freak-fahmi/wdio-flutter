const find = require('appium-flutter-finder');
const assert = require('assert');
const expectChai = require('chai').expect;
const loginScreen = require('../widgetKey/login_screen.js');

class LoginPageTest {
    async LaunchAppEx() {
        // await validateElementPosition(driver, loginScreen.buttonFinder);
        assert.strictEqual(await driver.execute('flutter:checkHealth'), 'ok');
        await driver.execute('flutter:clearTimeline');
        await driver.execute('flutter:forceGC');
        assert.strictEqual(await driver.getElementText(loginScreen.counterTextFinder), '0');
    }

    async LaunchApp() {
        // await validateElementPosition(driver, loginScreen.buttonFinder);
        assert.strictEqual(await driver.execute('flutter:checkHealth'), 'ok');
        await driver.execute('flutter:clearTimeline');
        await driver.execute('flutter:forceGC');
        // assert.strictEqual(await driver.getElementText(loginScreen.btnLewatiSplashScreen), 'LEWATI');
    }

    async longTapIncrement() {
        await driver.elementClick(loginScreen.buttonFinder);
        await driver.touchAction({
            action: 'tap',
            element: { elementId: loginScreen.buttonFinder }
          });    
          assert.strictEqual(await driver.getElementText(loginScreen.counterTextFinder), '3');
        // const isDisplayed = await (loginScreen.counterTextFinder).isDisplayed()
        // expectChai(isDisplayed).to.equal(true);
        // await driver.execute('flutter:waitFor', loginScreen.buttonFinder, 100)
        // await expect (loginScreen.buttonFinder2).toBeDisplayed
    }

    async clickLewati() {
        await driver.elementClick(loginScreen.btnLewatiSplashScreen1);
        assert.strictEqual(await driver.getElementText(loginScreen.btnLewatiSplashScreen), 'LEWATI');
    }

}

module.exports = new LoginPageTest();
