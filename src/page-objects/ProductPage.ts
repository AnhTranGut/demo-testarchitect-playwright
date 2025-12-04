import { test, expect, Page, Locator } from '@playwright/test';


export class ProductPage {
    readonly page: Page;
    readonly GridViewButton: Locator;
    readonly ListViewButton: Locator;
    readonly SortByDropdown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.GridViewButton = page.locator('.switch-grid');
        this.ListViewButton = page.locator('.switch-list');
        this.SortByDropdown = page.getByRole('combobox', { name: 'Shop order' });

    }
    
    async switchToGrid() {
        await this.GridViewButton.click();
        await this.page.waitForTimeout(2000);
    } 

    async switchToList() {
        await this.ListViewButton.click();
        await this.page.waitForTimeout(2000);

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
        await this.page.waitForTimeout(1000);
    }

    async selectMuiltipleProductsByNames(productNames: string[]) {
        for (const name of productNames) {
            await this.addProductToCart(name);
        }
    }

    async sortBy(option: string) {
        await this.page.waitForLoadState('domcontentloaded');
        await this.SortByDropdown.selectOption(option);
    }

    
    async getAnItemPriceList( ) {
        let priceList: number[] = [];

        const totalItemPrice = this.page.locator('.product-details .price').count();

        for (let i = 1; i <= await totalItemPrice; i++) {
            const priceText = await this.page.locator(`(//div[@class ='content-product '])[${i}]//span[@class ='woocommerce-Price-amount amount' and not(ancestor::del)]`).
            innerText();
            const numberOnly = priceText.replace(/[^0-9.-]+/g, "");
            const prices =parseFloat(numberOnly);
            priceList.push(prices);
        }

        return priceList;
    }

        async getItemOrder() {
        await this.page.waitForSelector('.loading', { state: 'detached' });
        return await this.getAnItemPriceList();
    }

    async sortArray(sortType: string): Promise<number[]> {
        const price = await this.getItemOrder();
        let sorted: number[] = [];
        if(sortType === 'Ascend') {
            sorted = [...price].sort((a, b) => a - b);
        } else if (sortType === 'Descend') {
            sorted = [...price].sort((a, b) => b - a);
        } else {
            console.log('Cannot sort with value given!');
        }
        return sorted;
    }
}