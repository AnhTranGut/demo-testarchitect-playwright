import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.testarchitect.com/');
  await page.locator('#menu-main-menu-1').getByRole('link', { name: 'Shop' }).click();
  await page.waitForLoadState('domcontentloaded');
  await page.getByRole('combobox', { name: 'Shop order' }).selectOption('Sort by price: low to high');
  
  let priceList: number[] = [];
  const totalItemPrice = page.locator('.product-details .price').count();
 console.log(`Total items found: ${await totalItemPrice}`);
  for (let i = 1; i < await totalItemPrice; i++) {
    const priceText = await page.locator(`(//div[@class ='content-product '])[${i}]//span[@class ='woocommerce-Price-amount amount' and not(ancestor::del)]`).
    innerText();
    const numberOnly = priceText.replace(/[^0-9.-]+/g, "");
    const prices =parseFloat(numberOnly);
    priceList.push(prices);
  }

  console.log(priceList);
});