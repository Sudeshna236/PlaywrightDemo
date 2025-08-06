import { test, expect, request } from '@playwright/test';

// Define test data
const testCases = [
  { userId: 1, expectedName: 'Leanne Graham' },
  { userId: 2, expectedName: 'Ervin Howell' },
  { userId: 3, expectedName: 'Clementine Bauch' },
];

test.describe('GET /users/:id - Parameterized API tests', () => {
  for (const { userId, expectedName } of testCases) {
    test(`should return correct name for user ${userId}`, async ({ request }) => {
      const response = await request.get('https://jsonplaceholder.typicode.com/users/'+userId);
      expect(response.ok()).toBeTruthy();

      const body = await response.json();
      expect(body.name).toBe(expectedName);
    });
  }
});


