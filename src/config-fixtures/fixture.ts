// Ví dụ file fixtures.ts
import { test as base, expect } from '@playwright/test';
import { LoginPage } from 'pages/LoginPage';
import { BasePage } from 'pages/BasePage';
import { ProductPage } from 'pages/ProductPage';
import { ProductDetailPage } from 'pages/ProductDetailPage';
import { CartPage } from 'pages/CartPage';
// Khai báo kiểu
type MyFixtures = {
  loginPage: LoginPage;
  basePage: BasePage;
  productPage: ProductPage;
  productDetailPage: ProductDetailPage;
  cartPage: CartPage;
  
  // ... các page khác
};

export const test = base.extend<MyFixtures>({
  
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  basePage: async ({ page }, use) => {
    await use(new BasePage(page));
  },

  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },

  productDetailPage: async ({ page }, use) => {
    await use(new ProductDetailPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  }
  // ...
});

export { expect } 