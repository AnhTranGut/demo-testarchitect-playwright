import {  expect, test } from 'utils/fixture';
import { PAGE_NAV, PRODUCT_LIST } from 'data-test/constant';


test("TC02 - Verify users can sort items by price", async ({
    page,
    basePage,
    productPage,
    cartPage
    }) => {


    
    // 1. Open browser and go to https://demo.testarchitect.com/
    await basePage.navigateToWebSite();
    // 2. Login with valid credentials 
    await basePage.gotoLoginPage();
    // 3. Go to Shop page
    await basePage.navigateToMenuCategory(PAGE_NAV.SHOP);
    // 4. Add a product
    await productPage.addProductToCart(PRODUCT_LIST.AirPods);
    // 5. Go to the cart
    await basePage.goToCart();
    await page.reload();
    // 6. Verify quantity of added product
    await cartPage.checkProductInCart(PRODUCT_LIST.AirPods);
    // 7. Click on Plus(+) button
    const qtyLocator = (await cartPage.getQuantity(PRODUCT_LIST.AirPods));
    const preQuantity = Number(await qtyLocator.textContent());

    await cartPage.increaseQuantity(PRODUCT_LIST.AirPods,1);
    await page.reload();
    // 8. Verify quantity of product and SUB TOTAL price
    expect(Number(await cartPage.getQuantity(PRODUCT_LIST.AirPods))).toBe(preQuantity + 1);

    // 9. Enter 4 into quantity textbox then click on UPDATE CART button
    // 10. Verify quantity of product is 4 and SUB TOTAL price
    // 11. Click on Minus(-) button
    // 12. Verify quantity of product and SUB TOTAL price

});