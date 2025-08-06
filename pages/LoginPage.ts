import { Page } from '@playwright/test';
import { BASE_URL2,DOCTOR_USERNAME, DOCTOR_PASSWORD,PATIENT_NAME,PATIENT_DOB,PATIENT_ID} from "../utils/testConfig";


export class LoginPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto(BASE_URL2);
  }

  async login(username: string, password: string) {
    await this.page.fill('#username', username);
    await this.page.fill('#password', password);
    await this.page.click('button[type="submit"]');
    await this.page.waitForURL('**/dashboard');
  }
}