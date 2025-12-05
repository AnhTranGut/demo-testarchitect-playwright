import { expect, test } from 'utils/fixture';
import { PAGE_NAV, PAYMENT_METHODS} from 'data-test/constant';
import BILLING_INFO from 'data-test/BillingInfo';
import { MESSAGES } from 'data-test/Message';

test("TC06 - Verify users try to buy an item without logging in (As a guest)", async ({
    page,
    basePage,
    productDetailPage,
    productPage,
    cartPage,
    checkoutPage,
    }) => {

    // 1. Open browser and go to website
    await basePage.navigateToWebSite();

    // 2. Login with valid credentials 

    // 3. Go to Shop page
    await basePage.navigateToMenuCategory(PAGE_NAV.SHOP);

    // 4. Select an item and add to cart
    await productPage.selectRandomProduct();
    await productDetailPage.addToCart();


    // 5. Go to Checkout page
    await basePage.goToCart();
    await cartPage.proceedToCheckout();


    // 6. Choose a different payment method (Direct bank transfer, Cash on delivery)
    await checkoutPage.chosePaymentMethod(PAYMENT_METHODS.COD);
    //await checkoutPage.verifyPaymentMethodSelected(PAYMENT_METHODS_DESCRIPTIONS.BACS);

    // 7. Complete the payment process
    await checkoutPage.fillBillingDetails(BILLING_INFO);
    await checkoutPage.placeOrder();
    // 8. Verify order confirmation message
    await expect(page.locator('.woocommerce-notice.woocommerce-notice--success.woocommerce-thankyou-order-received').first())
    .toHaveText(MESSAGES.ORDERS_SUCCESS_MESSAGE);
});