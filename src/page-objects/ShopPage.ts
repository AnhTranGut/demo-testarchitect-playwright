import { test, expect, Page, Locator } from '@playwright/test';

export class ShopPage {
    readonly page: Page;
    readonly addToCartButton: Locator;
    readonly sortByDropdown: Locator;

    constructor(page: Page) {
        this.page = page;
            this.addToCartButton = page.getByRole('link', { name: 'Add *{} to your cart' });  
            this.sortByDropdown = page.getByRole()
    }

    
}
