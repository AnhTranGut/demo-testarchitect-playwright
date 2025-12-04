import { Page } from '@playwright/test';

export async function waitForLoadingToDisappear(page: Page) {
    const globalOverlay = page.locator('body > .blockUI.blockOverlay');

    await globalOverlay.waitFor({ state: 'hidden', timeout: 10000 }).catch(() => {        console.log("Loading overlay did not disappear within 10 seconds, continuing...");
    });
}



// Class có thể được giữ lại để gom nhóm các helper khác
export class WaitForProcessOrdeHelper {
    readonly page: Page;  
    constructor(page: Page) {
        this.page = page;
    }
}