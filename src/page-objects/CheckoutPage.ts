import { Locator, Page } from "@playwright/test";
import BILLING_INFO from "data-test/BillingInfo";

export class CheckoutPage {
    readonly page: Page
    readonly firstNameTextbox: Locator;
    readonly lastNameTextbox: Locator;
    readonly countryDropdown: Locator;
    readonly streetAddressTextbox: Locator;
    readonly cityTextbox: Locator;
    readonly phoneNumTextbox: Locator;
    readonly zipCodeTextbox: Locator;
    readonly emailTextbox: Locator;
    readonly placeOrderButton: Locator;
    readonly itemOrderedInOrderTable: Locator;
    readonly errorMessage: Locator;
     

    constructor(page: Page) {
        this.page = page;

        this.firstNameTextbox = page.getByRole('textbox', { name: 'First name *' });
        this.lastNameTextbox = page.getByRole('textbox', { name: 'Last name *' });
        this.countryDropdown = page.getByLabel('Country / Region *');
        this.streetAddressTextbox = page.getByRole('textbox', { name: 'Street address *' });
        this.cityTextbox = page.getByRole('textbox', { name: 'Town / City *' });
        this.phoneNumTextbox = page.getByRole('textbox', { name: 'Phone *' });
        this.zipCodeTextbox = page.getByRole('textbox', { name: 'ZIP Code *' });
        this.emailTextbox = page.getByRole('textbox', { name: 'Email address *' });
        this.placeOrderButton = page.getByRole('button', { name: 'Place order' });

        // Order summary table
        this.itemOrderedInOrderTable = page.locator('table.shop_table td.product-name');

        // Error alert on checkout
        this.errorMessage = page.getByRole('alert');
    }

    async fillBillingDetails(info: typeof BILLING_INFO): Promise<void> {
        await this.firstNameTextbox.fill(info.firstName);
        await this.lastNameTextbox.fill(info.lastName);
        await this.countryDropdown.selectOption(info.country);
        await this.streetAddressTextbox.fill(info.StrAdd);
        await this.cityTextbox.fill(info.city);
        await this.zipCodeTextbox.fill(info.zipCode);
        await this.phoneNumTextbox.fill(info.phoneNum);
        await this.emailTextbox.fill(info.email);
    }
}