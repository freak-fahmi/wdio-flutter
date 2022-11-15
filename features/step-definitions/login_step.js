const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPageTest = require('../pageobjects/login_page');


Given(/^I am open aplikasi counter$/,{ timeout: 20000 }, async () => {
    console.log('Start Aplication')
    await LoginPageTest.LaunchAppEx()
    // await browser.pause(10000);
});

Given(/^I am open aplikasi agen46$/,{ timeout: 20000 }, async () => {
    await LoginPageTest.LaunchApp()
});

When(/^I longtap increment$/, async () => {
    await LoginPageTest.longTapIncrement()
});

When(/^I click button lewati$/, async () => {
    await LoginPageTest.clickLewati()
});

// When(/^I lewati download screen$/, async () => {
//     await LoginPageTest.lewatiDownloadScreen()
// });

// When(/^I click button masuk first install$/,{ timeout: 30000 }, async() => {
//     await LoginPageTest.clickButtonMasukFirstInstall()
// });

// When(/^I click button masuk$/,{ timeout: 20000 }, async() => {
//     await LoginPageTest.clickButtonMasuk()
// });

// When(/^I click button masuk case failed$/, async() => {
//     await LoginPageTest.clickButtonMasukCaseFailed()
// });


// When(/^I login with (\w+) and (.+)$/, async (username, password) => {
//     await LoginPageTest.login(username, password)
// });

// When(/^I login for the first time with (\w+) and (.+)$/, async (username, password) => {
//     await LoginPageTest.login(username, password)
// });


// When(/^I wanna Regist Online$/, async () => {
//     await LoginPageTest.RegistOnline()
// });


// Then(/^I should see a element present$/, async () => {
//    await browser.pause(5000);
//     await LoginPageTest.VerifyHomeDashboard()
//     // await expect(SecurePage.flashAlert).toHaveTextContaining(message);
// });

// Then(/^I should see a pop up error element present$/, async () => {
// //    await browser.pause(20000);
//     await LoginPageTest.VerifyHomeDashboardFailCondition()
//     // await expect(SecurePage.flashAlert).toHaveTextContaining(message);
// });

