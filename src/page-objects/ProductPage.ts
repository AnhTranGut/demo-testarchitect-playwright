import { test, expect, Page, Locator } from '@playwright/test';


export class ProductPage {
    readonly page: Page;
    readonly GridViewButton: Locator;
    readonly ListViewButton: Locator;
    readonly productContainer: Locator;
    readonly addToCartButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.GridViewButton = page.getByRole('link', { name: ' Grid' });
        this.ListViewButton = page.getByRole('link', { name: ' List' });
        this.productContainer = page.locator('div.products-loop');
        this.addToCartButton = page.locator('a.add_to_cart_button');
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

    async addProductToCart(productName: string) {
        console.log(`Added product: ${productName} to cart`);
        await this.page.getByRole('link', { name: `Add “${productName}” to your cart` }).first().click();
        
    }

    async selectMuiltipleProductsByNames(productNames: string[]) {
        for (const name of productNames) {
            await this.addProductToCart(name);
        }
    }

    async getAnItemPriceList(productName: string) {
        return this.page.locator('.price').filter({ hasText: productName }).first().innerText();
    }

    async isSortedByAscending() {
    }
}