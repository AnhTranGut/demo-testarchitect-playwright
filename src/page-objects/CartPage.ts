import { Page, Locator, expect } from '@playwright/test';

export class CartPage {
    readonly page: Page;
    readonly checkoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.checkoutButton = page.getByRole('link', { name: 'PROCEED TO CHECKOUT' });
    }

    async proceedToCheckout() {
        await this.checkoutButton.click();
    }
}