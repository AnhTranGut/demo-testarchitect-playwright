import { test, expect, Page, Locator } from '@playwright/test';



export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.getByRole('textbox', { name: 'Username or email address *' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password *' });
        this.loginButton = page.getByRole('button', { name: 'LOG IN' });
    }

    async login() {
        await this.usernameInput.fill(process.env.USER_NAME!);
        await this.passwordInput.fill(process.env.PASS_WORD!);
        await this.loginButton.click();
    }
}
