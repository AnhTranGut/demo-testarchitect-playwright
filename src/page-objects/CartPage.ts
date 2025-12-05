import { Page, Locator, expect } from '@playwright/test';

export class CartPage {
    readonly page: Page;

    readonly checkoutButton: Locator;
    readonly removeProductButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.checkoutButton = page.getByRole('link', { name: 'PROCEED TO CHECKOUT' });
        this.removeProductButton = page.locator('a.remove-item');
    }

    async proceedToCheckout() {
        await this.checkoutButton.click();
    }

    async checkProductInCart(productName: string) {
      await expect(
        this.page.locator('tbody tr.cart_item').filter({
          has: this.page.locator('a.product-title', { hasText: productName }),
        })
      ).toHaveCount(1);
    }

    async checkProductsInCart(productNames: string[]) {
      for (const name of productNames) {
        await this.checkProductInCart(name);
      }
    }


    private getProductRow(productName: string): Locator {
      return this.page.getByRole('table').getByRole('row', { name: productName });
    }
  
    async increaseQuantity(productName: string, amount: number ) {
      const plusButton = this.getProductRow(productName).locator('.quantity .plus');
      for (let i = 0; i < amount; i++) {
        await plusButton.click();
      }

    }

    async decreaseQuantity(productName: string) {
      const minusButton = this.getProductRow(productName).locator('.quantity .minus');
      await minusButton.click();
    }

    async getSubtotal(productName: string)  {
      const subtotal = this.getProductRow(productName).locator('.product-subtotal .amount');
      return subtotal;
    }

    async getQuantity(productName: string) {
      const quantity = this.getProductRow(productName).locator('input.qty');
      return quantity;
    }

    async RemoveProduct(productName: string)  {
      const removeButton = this.getProductRow(productName).locator('a.remove-item');
      await removeButton.click();
    }
    
    async RemoveAllProducts()  {
      await this.page.waitForLoadState('domcontentloaded');

      const removeButtons = this.page.locator('a.remove-item');
      const count = await removeButtons.count();  
      if (count > 0) {
        for (let i = 0; i < count; i++) {
                await removeButtons.nth(0).click(); 
          }
      }
      await this.page.waitForTimeout(5000);
    }  
}