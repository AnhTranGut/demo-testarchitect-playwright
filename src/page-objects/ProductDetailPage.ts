import { Locator, Page } from "@playwright/test";

export class ProductDetailPage {
    readonly addToCartButton: Locator;
    readonly checkoutButton: Locator;
    readonly reviewButton: Locator;
    readonly reviewTextbox: Locator;
    readonly submitReviewButton: Locator;
    
    constructor(private page: Page) {
        this.addToCartButton = this.page.getByRole('button', { name: 'Add to cart'}).first();
        this.checkoutButton = this.page.getByRole('link', { name: 'checkout' });
        this.reviewButton = this.page.locator('#tab_reviews');
        this.reviewTextbox = this.page.getByRole('textbox', { name: 'Your review *' });
        this.submitReviewButton = this.page.getByRole('button', { name: 'Submit' });
    }
    async addToCart() {
        await this.addToCartButton.click();
        // await this.page.locator('div').filter({ hasText: 'added' }).waitFor({ state: 'visible' });
        await this.page.waitForSelector("[data-type='success']") || await this.page.getByRole('alert').filter({ hasText: 'added' }).waitFor({ state: 'visible' });
        //await this.page.getByRole('alert', { name: /added/ }).waitFor({ state: 'visible' });

    }

    async clickCheckout() {
        await this.checkoutButton.click();
    }



    async getQuantity() {
        const prdName = await this.getPrdName();
        return await this.page.getByRole('spinbutton', { name: `${prdName} quantity` }).getAttribute('value') ?? "";
    }

    getPrice() {
        return this.page.locator('.fixed-content .price .woocommerce-Price-amount').last().innerText();
    }

    getPrdName() {
        return this.page.locator('.product_title').first().innerText();
    }

    async clickReview() {
        await this.reviewButton.click();
    }

    async rating(numberOfStars: string) {
        await this.page.locator(`.stars .star-${numberOfStars}`).click();
    }

    async writeReview(review: string) {
        await this.reviewTextbox.fill(review);
    }

    async submitReview() {
        await this.submitReviewButton.click();
    }

    async getPrdInfoList() {
        return [await this.getPrdName(), await this.getPrice(), await this.getQuantity()];
    }
}