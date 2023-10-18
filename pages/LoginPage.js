class LoginPage {
    constructor(page) {
      this.page = page;
      this.username_textbox = page.locator('[name="username"]');
      this.password_textbox = page.locator('[name="password"]');
      this.login_button = page.locator('[type="submit" ]');
      this.error_message= page.locator("(//p[@class='oxd-text oxd-text--p oxd-alert-content-text'])[1]")
      this.blank_username= page.locator("//div[@class='orangehrm-login-slot-wrapper']//div[1]//div[1]//span[1]")
      this.blank_password=page.locator("//div[@class='orangehrm-login-form']//div[2]//div[1]//span[1]")
    }
    // for element picker/locator serial: id>class>tag>attr>xpth
    async gotoLoginPage() {
      await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }
  
    async login(username, password) {
      await this.username_textbox.fill(username);
      await this.password_textbox.fill(password);
      await this.login_button.click();
  }

  async loginBlank(){
    await this.login_button.click();
  }

  async loginButton(){
    await this.login_button.click();
  }

}
  module.exports = LoginPage;