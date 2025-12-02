import { expect, test } from 'utils/fixture';
import { PAGE_NAV, PAYMENT_METHODS, PAYMENT_METHODS_DESCRIPTIONS, PRODUCT_LIST } from 'data-test/constant';
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
        
    // 1. Open browser and go to https://demo.testarchitect.com/
    await basePage.navigateToWebSite();
    // 2. Login with valid credentials 
    await basePage.gotoLoginPage();
    // 3. Go to Shop page
    await basePage.navigateToMenuCategory(PAGE_NAV.SHOP);
    // 4.  Switch view to list
    await productPage.switchToList();
    // 5. Sort items by price (low to high / high to low)
    // 6. Verify the order of items

});