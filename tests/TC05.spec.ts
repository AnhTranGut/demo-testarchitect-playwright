import { expect, test } from 'utils/fixture';
import { PAGE_NAV, SORTING_OPTIONS } from 'data-test/constant';
import BILLING_INFO from 'data-test/BillingInfo';
import { MESSAGES } from 'data-test/Message';
import { log } from 'console';

test.beforeEach("Precondition order product",async ({
    page,
    basePage,
    loginPage,
    productPage,
    cartPage,
    checkoutPage
    }) => {
    
    await basePage.navigateToWebSite();
    await basePage.gotoLoginPage();
});


test("TC04 - Verify users can buy multiple items successfully", async ({
    page,
    basePage,
    loginPage,

    }) => {
        
    // 1. Go to My Account page
    // 2. Click on Orders in left navigation
    // 3. Verify order details"


});