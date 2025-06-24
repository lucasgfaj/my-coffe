import { test } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8081/');
  await page.locator('div').filter({ hasText: /^Get Started$/ }).first().click();
  await page.getByText('Bem-vindo de volta!Acesse sua').click();
  await page.getByText('Cadastre-se').click();
  await page.getByRole('textbox', { name: 'Nome' }).click();
  await page.getByRole('textbox', { name: 'Nome' }).fill('Teste');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('teste@gmail.com');
  await page.getByRole('textbox', { name: 'Senha' }).click();
  await page.getByRole('textbox', { name: 'Senha' }).fill('05092004');
  await page.locator('div').filter({ hasText: /^Registrar$/ }).first().click();
});