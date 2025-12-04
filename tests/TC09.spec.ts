import { expect, test } from 'utils/fixture';
import { PAGE_NAV, CHOSEN_LIST, PRODUCT_LIST } from 'data-test/constant';
import BILLING_INFO from 'data-test/BillingInfo';
import { MESSAGES } from 'data-test/Message';

test("TC02 - Verify users can sort items by price", async ({
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
    // 4. Add a product
    await productPage.addProductToCart(PRODUCT_LIST.AIRPODS);
    // 5. Go to the cart
    await basePage.goToCart();
    // 6. Verify quantity of added product
    await cartPage.getProductRow(PRODUCT_LIST.AIRPODS)
    // 7. Click on Plus(+) button
    // 8. Verify quantity of product and SUB TOTAL price
    // 9. Enter 4 into quantity textbox then click on UPDATE CART button
    // 10. Verify quantity of product is 4 and SUB TOTAL price
    // 11. Click on Minus(-) button
    // 12. Verify quantity of product and SUB TOTAL price

});