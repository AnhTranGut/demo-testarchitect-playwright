import { Page, Locator, expect } from '@playwright/test';

export class CartPage {
    readonly page: Page;
    readonly checkoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.checkoutButton = page.getByRole('link', { name: 'Proceed to checkout' });
    }

    async proceedToCheckout() {
        await this.checkoutButton.click();
    }
}