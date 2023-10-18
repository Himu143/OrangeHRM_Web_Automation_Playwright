const { test, expect, beforeAll, afterAll } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const DashboardPage = require('../pages/DashboardPage');

require('dotenv').config() // read variables from .env file
console.log(process.env) // print all environment variables

test('Login with valid username and password', async ({ page }) => {
    const loginPage = new LoginPage(page); // Create an instance of the LoginPage class, passing the 'page' object.
    const dashboardPage = new DashboardPage(page);
    await loginPage.gotoLoginPage(); // Go to the login page using the 'gotoLoginPage' method.
    await expect(page).toHaveTitle(/OrangeHRM/); // Expect a title "to contain" a substring.
    await loginPage.login(process.env.LOGIN_USERNAME,process.env.LOGIN_PASSWORD)
    await expect(page.url()).toBe('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await expect(dashboardPage.dashboard_level).toHaveText("Dashboard"); // Expect the 'products_label' locator to have text 'Products'.
    await setTimeout(() => {
        
    }, 5000);
  

});

test('Login with invalid username and valid password', async ({ page }) => {
    const loginPage = new LoginPage(page); // Create an instance of the LoginPage class, passing the 'page' object.
    await loginPage.gotoLoginPage(); // Go to the login page using the 'gotoLoginPage' method.
    await expect(page).toHaveTitle(/OrangeHRM/); // Expect the title to contain a substring.
    await loginPage.login("himu", process.env.LOGIN_PASSWORD);
    await expect(loginPage.error_message).toHaveText("Invalid credentials") ;
    await setTimeout(() => {
        
    }, 5000);
});

test('Login with valid username and  invalid password', async ({ page }) => {
    const loginPage = new LoginPage(page); // Create an instance of the LoginPage class, passing the 'page' object.
    await loginPage.gotoLoginPage(); // Go to the login page using the 'gotoLoginPage' method.
    await expect(page).toHaveTitle(/OrangeHRM/); // Expect the title to contain a substring.

    await loginPage.login(process.env.LOGIN_USERNAME, "1234");
    await expect(loginPage.error_message).toHaveText("Invalid credentials")
    await setTimeout(() => {
        
    }, 5000);
    
});

test('Login with invalid username and invalid password', async ({ page }) => {
    const loginPage = new LoginPage(page); // Create an instance of the LoginPage class, passing the 'page' object.
    await loginPage.gotoLoginPage(); // Go to the login page using the 'gotoLoginPage' method.
    await expect(page).toHaveTitle(/OrangeHRM/); // Expect the title to contain a substring.

    await loginPage.login("Test", "1234");
    await expect(loginPage.error_message).toHaveText("Invalid credentials")
    await setTimeout(() => {
        
             }, 5000);
});

test('Login with try to blank field', async ({ page }) => {
    const loginPage = new LoginPage(page); // Create an instance of the LoginPage class, passing the 'page' object.
    await loginPage.gotoLoginPage(); // Go to the login page using the 'gotoLoginPage' method.
    await expect(page).toHaveTitle(/OrangeHRM/); // Expect the title to contain a substring.
    await loginPage.loginBlank();
    await expect(loginPage.blank_username).toHaveText("Required");
    await expect(loginPage.blank_password).toHaveText("Required");
    await setTimeout(() => {
        
    }, 5000);
});



test('Check Login button functionality ', async ({ page }) => {
    const loginPage = new LoginPage(page); // Create an instance of the LoginPage class, passing the 'page' object.
    await loginPage.gotoLoginPage(); // Go to the login page using the 'gotoLoginPage' method.
    await expect(page).toHaveTitle(/OrangeHRM/); // Expect the title to contain a substring.
    await loginPage.loginButton();
    await expect(loginPage.blank_username).toHaveText("Required");
    await expect(loginPage.blank_password).toHaveText("Required");
    await setTimeout(() => {
        
    }, 5000);
});


