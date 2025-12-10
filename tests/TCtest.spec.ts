import {  expect, test } from 'utils/fixture';
import { PAGE_NAV, PRODUCT_LIST } from 'data-test/constant';
import { get } from 'http';
import { getQuantityFromText } from 'helper/stringHelper';


test("TC02 - Verify users can sort items by price", async ({
    page,
    basePage,
    loginPage,
    productPage,
    cartPage
    }) => {


    
    // 1. Open browser and go to https://demo.testarchitect.com/
    await basePage.navigateToWebSite();
    // 2. Login with valid credentials 
    await basePage.gotoLoginPage();
    await loginPage.login();
    // 3. Go to Shop page
    await basePage.navigateToMenuCategory(PAGE_NAV.SHOP);
    // 4. Add a product
    //await productPage.addProductToCart(PRODUCT_LIST.AirPods);
    // 5. Go to the cart
    await basePage.goToCart();
    await page.reload();
    // 6. Verify quantity of added product
    await cartPage.checkProductInCart(PRODUCT_LIST.AirPods);
    // 7. Click on Plus(+) button
    const qtyLocator = await cartPage.checkAmountInCart(PRODUCT_LIST.AirPods)
    const num = await qtyLocator.textContent() as string;
    const quantity = getQuantityFromText(num); //10
    await cartPage.increaseQuantity(PRODUCT_LIST.AirPods,1);
    const qtyLocator2 = await cartPage.checkAmountInCart(PRODUCT_LIST.AirPods)
    const num2 = await qtyLocator2.textContent() as string;
    const quantity2 = getQuantityFromText(num2);

    expect(quantity2).toBe(quantity + 1);



    // await cartPage.increaseQuantity(PRODUCT_LIST.AirPods,1);
    // const qtyLocator2 = await cartPage.checkAmountInCart(PRODUCT_LIST.AirPods)
    // expect(Number(await qtyLocator2.textContent())).toBe(Number(await qtyLocator.textContent()) + 1);
});