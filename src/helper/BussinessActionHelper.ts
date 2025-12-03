import { MyFixtures } from 'utils/fixture';
import { PAGE_NAV } from 'data-test/constant';
import BILLING_INFO from 'data-test/BillingInfo';

export async function placeFullOrder({basePage,loginPage,productPage,cartPage,checkoutPage}: MyFixtures) {
  await basePage.navigateToWebSite();
  await basePage.gotoLoginPage();
  await loginPage.login();
  await basePage.navigateToMenuCategory(PAGE_NAV.SHOP);
  await productPage.selectRandomProduct();
  await basePage.goToCart();
  await cartPage.proceedToCheckout();
  await checkoutPage.fillBillingDetails(BILLING_INFO);
  await checkoutPage.placeOrder();
}


