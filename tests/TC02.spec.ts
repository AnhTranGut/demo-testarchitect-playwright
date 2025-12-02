import { expect, test } from 'utils/fixture';
import { PAGE_NAV, CHOSEN_LIST } from 'data-test/constant';
import BILLING_INFO from 'data-test/BillingInfo';
import { MESSAGES } from 'data-test/Message';

test("TC02 - Verify users can by multiplee item successfully", async ({
    page,
    basePage,
    loginPage,
    productPage,
    cartPage,
    checkoutPage
    }) => {

    // 1. Navigate to Login Page (Logic hidden inside the class)
    await basePage.navigateToWebSite();

    // 2. Login with valid credentials
    await basePage.gotoLoginPage();
    await loginPage.login();

    // 3. Go to shop page
    await basePage.navigateToMenuCategory(PAGE_NAV.SHOP);

    // 4. Select multiple items add to card
    await productPage.selectMuiltipleProductsByNames(Object.values(CHOSEN_LIST) as string[]);

    // 5. Go to the cart (mini cart)
    await basePage.goToCart();
    // Verify items are added to cart successfully
    await cartPage.checkProductsInCart(Object.values(CHOSEN_LIST) as string[]);

    // 6. Process to checkout and place order
    await cartPage.proceedToCheckout();
    await checkoutPage.fillBillingDetails(BILLING_INFO);
    await checkoutPage.placeOrder();

    // 7. Verify Order Status page is displayed
    await expect(page.locator('.woocommerce-notice.woocommerce-notice--success.woocommerce-thankyou-order-received').first())
    .toHaveText(MESSAGES.ORDERS_SUCCESS_MESSAGE, { timeout: 10000 });
});