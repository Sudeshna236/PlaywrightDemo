import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { PatientDashboardPage } from '../pages/PatientDashboardPage';

test('Validate patient record by ID', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboard = new PatientDashboardPage(page);

  await loginPage.navigate();
 // await loginPage.login('doctor.jane', 'securePass123');
  await loginPage.login('DOCTOR_USERNAME', 'DOCTOR_PASSWORD');

  await dashboard.searchPatientById('PATIENT_ID');

  const patient = await dashboard.getPatientDetails();
  expect(patient.name).toBe('PATIENT_NAME');
  expect(patient.dob).toBe('PATIENT_DOB0');
});