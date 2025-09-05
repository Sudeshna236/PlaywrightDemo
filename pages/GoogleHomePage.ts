import { Page, expect } from "@playwright/test";

export class GoogleHomePage {
  constructor(private page: Page) { }

  async navigate() {
   
    await this.page.goto("https://www.google.com");
    const getrejectall= await this.page.getByRole('button', { name: 'Reject all' }).isVisible();
    if (getrejectall)
    {
      await this.page.getByRole('button', { name: 'Reject all' }).click();
    }

  }

  async verifySearchPageLoad() {
    await expect(this.page.locator("textarea[name='q']")).toBeVisible();
  }

  async typeInSearchBox(searchTerm: string) {
    await this.page.fill('textarea[name="q"]', searchTerm);
  }
}