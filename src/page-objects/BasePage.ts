import { Page, Locator } from '@playwright/test';

export class BasePage {
  readonly allDepartmentsDropdown: Locator;
  readonly loginButton: Locator;
  readonly cartButton: Locator;
  readonly accountButton: Locator;

  constructor(private page: Page) {
    this.allDepartmentsDropdown = this.page.getByText('All departments');
    this.loginButton = this.page.getByRole('link', { name: 'Log in / Sign up' });
    this.accountButton = this.page.locator('.header-top .account-type1');
    this.cartButton = this.page.getByRole('link').filter({ hasText: '$' });
  }

  async navigateToWebSite() {
    await this.page.goto(process.env.BASE_URL!);
  }
  
   async gotoLoginPage() {
    await this.loginButton.click();
  }

  async hoverAllDepartments() {
    await this.page.waitForLoadState('networkidle');
    await this.allDepartmentsDropdown.waitFor({ state: 'visible', timeout: 10000 });
    await this.allDepartmentsDropdown.hover();
    await this.page.waitForTimeout(500);
  }

  async selectADepartments(departmentName: String) {
    await this.page.getByRole('link', { name: `${departmentName}`, exact: false}).click();
  }

  async goToCart() {
    await this.cartButton.click();
    //await this.page.reload();
  }

  async navigateToMenuCategory(categoryName: string) {
        await this.page.locator('#menu-main-menu-1').getByRole('link', { name: categoryName }).click();
  }

  async selectPage(optionName: string) {
        await this.page.getByRole('link', { name: `${optionName}`, exact: false }).click();
  }

  async goToAccountPage() {
    await this.accountButton.click();
  }

}

