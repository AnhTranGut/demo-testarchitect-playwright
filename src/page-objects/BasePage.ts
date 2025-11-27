import { Page, Locator } from '@playwright/test';

export class BasePage {
  readonly allDepartmentsDropdown: Locator;
  readonly loginButton: Locator;
  readonly cartButton: Locator;
  
  constructor(private page: Page) {
    this.allDepartmentsDropdown = this.page.getByText('All departments');
    this.loginButton = this.page.getByRole('link', { name: 'Log in / Sign up' });
    this.cartButton = this.page.getByRole('link').filter({ hasText: '$' });
  }
  async navigateToWebSite() {
    await this.page.goto(process.env.BASE_URL!);
  }
  
   async gotoLoginPage() {
    await this.loginButton.click();
  }

  async hoverAllDepartments() {
    await this.allDepartmentsDropdown.hover();
  }

  async selectADepartments(departmentName: String) {
    await this.page.getByRole('link', { name: `${departmentName}`, exact: false}).click();
  }

  async goToCart() {
    await this.cartButton.click();
    await this.page.reload();
  }

}

