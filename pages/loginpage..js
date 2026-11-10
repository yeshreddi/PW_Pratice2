
const {expect}= require('@playwright/test')

class LoginPage
{

constructor(page)
{

this.page = page;
this.username = page.getByPlaceholder('Enter Email')
this.password = page.getByPlaceholder('Enter Password')
this.signInButton = page.getByRole('button', { name: 'Sign In' })

}

async loginToApplication(username, password){
await this.username.fill('admin@email.com')
await this.password.fill('admin@123')
await this.signInButton.click()
}

}

module.exports = LoginPage