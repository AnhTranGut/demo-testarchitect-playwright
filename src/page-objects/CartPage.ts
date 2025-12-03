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
    private getProductRow(productName: string): Locator {
    return this.page.locator(`tr.cart_item:has(a.product-title:text-is("${productName}"))`);
  }
  
   async increaseQuantity(productName: string) {
    const plusButton = this.getProductRow(productName).locator('.quantity .plus');
    await plusButton.click();
  }

  async decreaseQuantity(productName: string) {
    const minusButton = this.getProductRow(productName).locator('.quantity .minus');
    await minusButton.click();
  }
    async getQuantity(productName: string): Promise<number> {
    const input = this.getProductRow(productName).locator('input.qty');
    const value = await input.inputValue();
    return parseInt(value, 10);
  }
  
}