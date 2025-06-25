import { test } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8081/');
  await page.locator('div').filter({ hasText: /^Get Started$/ }).first().click();
  await page.getByRole('textbox', { name: 'Email ou nome de usuário' }).click();
  await page.getByRole('textbox', { name: 'Email ou nome de usuário' }).fill('user@example.com');
  await page.getByText('Bem-vindo de volta!Acesse sua').click();
  await page.getByRole('textbox', { name: 'Senha' }).fill('12345678');
  await page.getByRole('textbox', { name: 'Senha' }).press('Enter');
  await page.locator('div').filter({ hasText: /^Entrar$/ }).first().click();
  await page.locator('.css-view-g5y9jx.r-alignItems-1awozwy > div > .css-view-g5y9jx.r-flexBasis-1mlwlqe > .css-accessibilityImage-9pa8cd').first().click();
  await page.locator('div').filter({ hasText: /^Buy Now$/ }).first().click();
  await page.locator('div').filter({ hasText: /^Order$/ }).nth(1).click();
});