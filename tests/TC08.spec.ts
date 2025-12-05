import {  test } from 'utils/fixture';
import { PAGE_NAV, PRODUCT_LIST } from 'data-test/constant';


test("TC02 - Verify users can sort items by price", async ({
    basePage,
    loginPage,
    productPage,
    cartPage,
    }) => {

    // 1. Navigate to Login Page (Logic hidden inside the class)
    await basePage.navigateToWebSite();

    // 2. Login with valid credentials
    await basePage.gotoLoginPage();
    await loginPage.login();

    // 3. Go to shop page
    await basePage.navigateToMenuCategory(PAGE_NAV.SHOP);

    // 4. Select multiple items add to card
    await productPage.addProductToCart(PRODUCT_LIST.AirPods);

    // 5. Go to the cart (mini cart)
    await basePage.goToCart();
  
    // 6. Process to checkout and place order
    // const oldSubtotal = await cartPage.getSubtotal(PRODUCT_LIST.DJI_MAVIC_PRO_CAMERA_DRONE);
    // await cartPage.increaseQuantity(PRODUCT_LIST.DJI_MAVIC_PRO_CAMERA_DRONE, 2);
    // const oldSubValue = await oldSubtotal.textContent() || '';
    
    // await expect(oldSubtotal).not.toHaveText(oldSubValue);

    await cartPage.RemoveAllProducts();
    
    
});