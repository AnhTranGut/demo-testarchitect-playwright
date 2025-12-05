import { expect, test } from 'utils/fixture';
import { PAGE_NAV, SORTING_OPTIONS } from 'data-test/constant';


test("TC04 - Verify users can buy multiple items successfully", async ({
    basePage,
    productPage,

    }) => {
        
    // 1. Open browser and go to https://demo.testarchitect.com/
    await basePage.navigateToWebSite();

    // 2. Login with valid credentials 
    await basePage.gotoLoginPage();

    // 3. Go to Shop page
    await basePage.navigateToMenuCategory(PAGE_NAV.SHOP)
    
    // 4.  Switch view to list
    await productPage.switchToList();

    // 5. Sort items by price (low to high / high to low)
    await productPage.sortBy(SORTING_OPTIONS.PriceLowToHigh);

    // 6. Verify the order of items
    const acutalSortedPriceList = await productPage.getItemOrder();
    console.log("Actual Sorted Price List:", acutalSortedPriceList);
    const expectedSortedPriceList = await productPage.sortArray('Ascend');
    console.log("Expected Sorted Price List:", expectedSortedPriceList);
    expect(acutalSortedPriceList).toEqual(expectedSortedPriceList);

});