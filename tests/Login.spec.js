const { test, expect } = require('@playwright/test')

test('Login test', async ({ page }) => {


await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")


await page.getByPlaceholder('Username').fill('Admin')

await page.waitForTimeout(5000)

await page.getByPlaceholder('Password').fill('admin123')

await page.getByRole('button', { name: 'Login' }).click()

await expect(page).toHaveTitle("OrangeHRM")

})

