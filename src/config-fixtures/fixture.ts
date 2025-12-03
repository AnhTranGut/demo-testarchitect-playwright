// Ví dụ file fixtures.ts
import { test as base, expect } from '@playwright/test';
import { LoginPage } from 'pages/LoginPage';
import { BasePage } from 'pages/BasePage';
import { ProductPage } from 'pages/ProductPage';
import { ProductDetailPage } from 'pages/ProductDetailPage';
import { CartPage } from 'pages/CartPage';
import { CheckoutPage } from 'pages/CheckoutPage';
import { OrderStatusPage } from 'pages/OrderStatusPage';
import { OrderHistoryPage } from 'pages/OrderHistoryPage';

// Khai báo kiểu
type MyFixtures = {
  loginPage: LoginPage;
  basePage: BasePage;
  productPage: ProductPage;
  productDetailPage: ProductDetailPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  orderStatusPage: OrderStatusPage;
  orderHistoryPage: OrderHistoryPage;
  
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
  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
  orderStatusPage: async ({ page }, use) => {
    await use(new OrderStatusPage(page));
  },
  orderHistoryPage: async ({ page }, use) => {
    await use(new OrderHistoryPage(page));
  }


  // ...
});

export { expect, MyFixtures } 