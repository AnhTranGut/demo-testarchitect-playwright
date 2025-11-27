import { test, expect, Page, Locator } from '@playwright/test';


export class ProductPage {
    readonly page: Page;
    readonly GridViewButton: Locator;
    readonly ListViewButton: Locator;
    readonly productContainer: Locator;

    constructor(page: Page) {
        this.page = page;
        this.GridViewButton = page.getByRole('link', { name: ' Grid' });
        this.ListViewButton = page.getByRole('link', { name: ' List' });
        this.productContainer = page.locator('div.products-loop');
    }
    
    async switchToGrid() {
        await this.GridViewButton.click();
    } 

    async switchToList() {
        await this.ListViewButton.click();
    }

    async selectRandomProduct() {
        const products = this.page.locator('.content-product');
        const count = await products.count();
        const randomIndex = Math.floor(Math.random() * count);
        console.log(`Selecting product at index: ${randomIndex}`);
        await products.nth(randomIndex).click();
    }
}