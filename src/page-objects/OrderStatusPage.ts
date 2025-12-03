import { Locator, Page } from "@playwright/test";
import { MESSAGES } from "data-test/Message";

export class OrderStatusPage {
    readonly page: Page
    readonly titleOrderStatus: Locator;
    readonly producutOrderNumber: Locator;
    readonly successMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.titleOrderStatus = page.locator('H1').filter({ hasText: MESSAGES.ORDERS_SUCCESS_MESSAGE });
        this.producutOrderNumber = page.locator('.woocommerce-order-overview__order strong');
        this.successMessage = this.page.getByText(MESSAGES.ORDERS_SUCCESS_MESSAGE);

    }   

    getProductNameInOrderDetails(prdName: String): Locator {
        return this.page.locator('tr.order_item td.product-name')
        .filter({ hasText: `${prdName}` })
        .locator('a');
    }   

    getProdcutPriceInOrderDetails(prdName: String): Locator {
        return this.page.locator('tr.order_item td.product-name')
        .filter({ hasText: `${prdName}` })
        .locator('.product-quantity');
    }

    getProductQuantityInOrderDetails(prdName: String): Locator {
        return this.page.locator('tr.order_item td.product-name')
        .filter({ hasText: `${prdName}` })
        .locator('strong');
    }

    async getBillingDetailInfo(fieldName: string) {
    }

    async getOrderNumber() {
        const orderNumber = await this.producutOrderNumber.innerText();
        console.log(`Order number is: ${orderNumber}`);
        return orderNumber;
    }
}   

