import { Page, expect } from "@playwright/test";
import { BASE_URL1,ValidUserName, ValidPassword,InValidUserName,InValidPassword} from "../utils/testConfig";

export class SauceDemoPage {
  constructor(private page: Page) { }

  async navigate() {
    await this.page.goto(BASE_URL1);
  }

  async entervalidusercredentials() {
   
    const username = this.page.locator('input[name="user-name"]');
    await username.fill(ValidUserName);
    const password = this.page.locator('input[name="password"]');
    await password.fill(ValidPassword);       
    await this.page.click('input[name="login-button"]');
    await expect(this.page.getByText('Swag Labs')).toBeVisible();
  }

  async enterInvalidusercredentials() {
   
    const username = this.page.locator('input[name="user-name"]');
    await username.fill(InValidUserName);
    const password = this.page.locator('input[name="password"]');
    await password.fill(InValidPassword);       
    await this.page.click('input[name="login-button"]');
    await expect(this.page.getByText('Username and password do not match any user in this service')).toBeVisible();
     
  
  }
 
     
 /* async verifyPageLoad() {
  

     // await expect(this.page.locator('class="app_logo">Swag Labs')).toBeVisible();
  
  }

  async typeInSearchBox(searchTerm: string) {
    await this.page.fill('textarea[name="q"]', searchTerm);
  }*/
}