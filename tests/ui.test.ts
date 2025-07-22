import { test } from "@playwright/test";
import { SauceDemoPage } from "../pages/SauceDemoPage";


test.describe("Sauce Demo Page UI testing", () => {
  test("Test with Valid login credentials ", async ({ page }) => {
    const saucedemo = new SauceDemoPage(page);
    await saucedemo.navigate();
    await saucedemo.entervalidusercredentials();
    //await saucedemo.verifyPageLoad();  
      
  }); 

   test("Test with InValid login credentials ", async ({ page }) => {
    const saucedemo = new SauceDemoPage(page);
    await saucedemo.navigate();
    await saucedemo.enterInvalidusercredentials();
    //await saucedemo.verifyPageLoad();  
      
  }); 
});
