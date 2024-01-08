const { I } = inject();

Given('I am on login page', () => {
  I.amOnPage('')
  I.click('.fa-user')
  I.waitForElement('#user')
});

When('I fill the email field with {string}', (email) => {
 I.fillField('#user', email)
});

When('I fill the password field with {string}', (password) => {
  I.fillField('#password', password)
});

When('I click on Login button', () => {
  I.click('#btnLogin')
  
});

Then('I see {string}', (message) => {
  I.see(message)
});
