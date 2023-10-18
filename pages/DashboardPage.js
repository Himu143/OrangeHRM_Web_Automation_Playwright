class DashboardPage {
    constructor(page) {
      this.page = page;
      this.dashboard_level= page.locator('[class="oxd-topbar-header-title"]');
    }
  }
  
  module.exports = DashboardPage;