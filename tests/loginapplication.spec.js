const { test, expect } = require('@playwright/test')
const LoginPage = require('../pages/loginpage..js')

test('Login testing test', async function({ page }){

    await page.goto("https://freelance-learn-automation.vercel.app/login")

    const loginPage = new LoginPage(page);

    await loginPage.loginToApplication()


})

