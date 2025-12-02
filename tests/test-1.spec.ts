import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.testarchitect.com/shop/');
  await page.getByText('$290.00').nth(1).click();
});