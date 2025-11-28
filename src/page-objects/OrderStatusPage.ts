import { Locator, Page } from "@playwright/test";
import { MESSAGES } from "data-test/Message";

export class OrderStatusPage {
    readonly page: Page
    readonly titleOrderStatus: Locator;

    constructor(page: Page) {
        this.page = page;
        this.titleOrderStatus = page.locator('H1').filter({ hasText: MESSAGES.ORDERS_SUCCESS_MESSAGE });
    }   

    getProductNameInOrderDetails(prdName: String): Locator {
        return this.page.locator('tr.order_item td.product-name')
        .filter({ hasText: `${prdName}` })
        .locator('a');
    }   

    getProdcutPriceInOrderDetails(prdName: String): Locator {
        return this.page.getByRole('row', { name: 'Canon i-SENSYS LBP6030W with' }).locator('bdi')
    }

    getProductQuantityInOrderDetails(prdName: String): Locator {
        return this.page.locator('tr.order_item td.product-name')
        .filter({ hasText: `${prdName}` })
        .locator('strong');
    }

    async getBillingDetailInfo(fieldName: string) {
    }
}   

