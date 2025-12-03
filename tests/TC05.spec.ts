import { expect, MyFixtures, test } from 'utils/fixture';
import { PAGE_NAV, PRODUCT_LIST } from 'data-test/constant';
import BILLING_INFO from 'data-test/BillingInfo';

test.beforeEach("Precondition order product", async ({
  basePage,
  loginPage,
  productPage,
  cartPage,
  checkoutPage
}) => {
    await basePage.navigateToWebSite();
    await basePage.gotoLoginPage();
    await loginPage.login();
    await basePage.navigateToMenuCategory(PAGE_NAV.SHOP);
    await productPage.addProductToCart(PRODUCT_LIST.BEATS_SSOLO3_WIRELESS_ON_EAR);
    await basePage.goToCart();
    await cartPage.proceedToCheckout();
    await checkoutPage.fillBillingDetails(BILLING_INFO);
    await checkoutPage.placeOrder();
});

test("TC05 - Verify users can buy multiple items successfully", async ({
    page,
    basePage,
    orderStatusPage,
    orderHistoryPage
    }) => {
    
    // 1. Go to My Account page
    await basePage.goToAccountPage();

    // 2. Click on Orders in left navigation
    await basePage.selectPage(PAGE_NAV.ORDERS);
    
    // 3. Verify order details"
    await orderHistoryPage.findOrderByNumber("3");
    
})