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

    async checkProductsInCart(productNames: string[]) {
        for (const name of productNames) {
        const row = this.page.locator('tbody tr.cart_item').filter({
            has: this.page.locator('a.product-title', { hasText: name }),
        });
    }
   
  }
}