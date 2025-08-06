import { Page } from '@playwright/test';

export class PatientDashboardPage {
  constructor(private page: Page) {}

  async searchPatientById(patientId: string) {
    await this.page.fill('#patient-search', patientId);
    await this.page.click('button#search');
    await this.page.waitForSelector('.patient-info');
  }

  async getPatientDetails() {
    const name = await this.page.textContent('.patient-name');
    const dob = await this.page.textContent('.patient-dob');
    return { name, dob };
  }
}