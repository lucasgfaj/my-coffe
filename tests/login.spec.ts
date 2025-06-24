import { test } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8081/');
  await page.locator('div').filter({ hasText: /^Get Started$/ }).first().click();
  await page.getByRole('textbox', { name: 'Email ou nome de usuário' }).click();
  await page.getByRole('textbox', { name: 'Email ou nome de usuário' }).fill('user@example.com');
  await page.getByRole('textbox', { name: 'Senha' }).click();
  await page.getByRole('textbox', { name: 'Senha' }).fill('12345678');
  await page.getByRole('textbox', { name: 'Senha' }).press('Enter');
  await page.locator('div').filter({ hasText: /^Entrar$/ }).first().click();
});