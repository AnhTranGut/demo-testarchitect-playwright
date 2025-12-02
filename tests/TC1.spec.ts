import { expect, test } from 'utils/fixture';
import { DEPARTMENTS } from 'data-test/Departments';
import BILLING_INFO from 'data-test/BillingInfo';
import { MESSAGES } from 'data-test/Message';


test("TC01 - Verify users can buy an item successfully", async ({ 
  page,
  basePage,
  loginPage,
  productPage,
  productDetailPage,
  cartPage,
  checkoutPage,
  orderStatusPage
  }) => {

  // 1. Navigate to Login Page (Logic hidden inside the class)
  await basePage.navigateToWebSite();

  // 2. Login with valid credentials
  await basePage.gotoLoginPage();
  await loginPage.login();

  // 3. Navigate to All Departments section
  await basePage.hoverAllDepartments();

  // 4. Select Electronic Components & Supplies
  await basePage.selectADepartments(DEPARTMENTS.CONSUMER_ELECTRONIC);

  // 5. Verify the items are displayed in Grid view
  //await productPage.switchToGrid();
  //await expect(productPage.productContainer).toHaveClass(/products-grid/);

  // 6. Switch view to List
  //await productPage.switchToList();
  // 7. Verify the items are displayed in List view
  //await expect(productPage.productContainer).toHaveClass(/products-list/);

  // 8. Select any item randomly to purchase
  await productPage.selectRandomProduct();
  const prdName = await productDetailPage.getProductName();
  const prdPrice = await productDetailPage.getPrice();
  const prdQuantity = await productDetailPage.getQuantity();
  
  // 9. Click "Add to Cart"
  await productDetailPage.addToCart();

  // 10. Go to the cart (mini cart)
  await basePage.goToCart();

  // 11. Verify item details in mini cart
  // 12. Click on Checkout
  await cartPage.proceedToCheckout();

  // 13. Verify Checkout page is displayed
  await expect(page).toHaveTitle('Checkout – TestArchitect Sample Website');  
  // 14. Verify item details in the order summary
  // 15. Fill the billing details using default payment method
  await checkoutPage.fillBillingDetails(BILLING_INFO);
  // 16. Click on PLACE ORDER
  await checkoutPage.placeOrder();
  // 17. Verify Order Status page is displayed
  await expect(page.locator('.woocommerce-notice.woocommerce-notice--success.woocommerce-thankyou-order-received'))
  .toHaveText(MESSAGES.ORDERS_SUCCESS_MESSAGE);
  // 18. Verify Order Details including billing and item information
  //Product details
  await expect(orderStatusPage.getProductNameInOrderDetails(prdName)).toHaveText(prdName,{ignoreCase: true});
  await expect(orderStatusPage.getProdcutPriceInOrderDetails(prdName)).toHaveText(prdPrice);
  await expect(orderStatusPage.getProductQuantityInOrderDetails(prdName)).toHaveText(`x ${prdQuantity}`);
});
