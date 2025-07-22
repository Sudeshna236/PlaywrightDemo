import { request, test, expect } from '@playwright/test';

test('GET /users returns success', async () => {
  const context = await request.newContext();
  const res = await context.get('https://reqres.in/api/users');
  expect(res.status()).toBe(200);
  const body = await res.json();
  expect(body.data.length).toBeGreaterThan(0);
});





