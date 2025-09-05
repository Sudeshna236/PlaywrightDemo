import { Page, expect } from "@playwright/test";

export class GoogleImagesPage {
  constructor(private page: Page) { }

  async navigate() {
    const context = this.page.context();
    await this.page.goto("https://images.google.com");
    
    const getrejectall= await this.page.getByRole('button', { name: 'Reject all' }).isVisible();
    if (getrejectall)
    {
      await this.page.getByRole('button', { name: 'Reject all' }).click();
    }
             
  }

  async searchImage(query: string) {
    await this.page.fill("textarea[name='q']", query);
    await this.page.keyboard.press("Enter");
  }

  async verifyResults() {
    await expect(this.page).toHaveURL(/.*sclient=img.*/, { timeout: 10000 });
  }

  async verifyImagePageLoad() {
    await this.page.waitForSelector('textarea[name="q"]');
  }

  async typeInSearchBox(searchTerm: string) {
    await this.page.fill('textarea[name="q"]', searchTerm);
  }

  async verifySearchSuggestions() {
    await this.page.waitForSelector('[data-attrid="AutocompletePrediction"]');
  }
}