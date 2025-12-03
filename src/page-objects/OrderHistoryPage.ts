import { Page, Locator } from '@playwright/test';

export class OrderHistoryPage {
  readonly orderRows: Locator;

  constructor(private page: Page) {
    this.orderRows = this.page.locator('td[data-title="Order"] a')
  }

  async findOrderByNumber(orderNumber: string) {
    const orderLink = this.orderRows.filter({ hasText: orderNumber });
    console.log(orderLink);
    for (let i = 0; i < await orderLink.count(); i++) {
      const text = await orderLink.nth(i).innerText();  
      }
  }
}