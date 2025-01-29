import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qa.zum.com.co/IndexPublic.html#!/Login');
  await page.getByPlaceholder('Correo electrónico').click();
  await page.getByPlaceholder('Correo electrónico').fill('supervisorentidad_QA');
  await page.getByPlaceholder('Correo electrónico').press('Alt+ControlOrMeta+@');
  await page.getByPlaceholder('Correo electrónico').fill('supervisorentidad_QAyopmail.com');
  await page.getByPlaceholder('Correo electrónico').click();
  await page.getByPlaceholder('Correo electrónico').press('Alt+6');
  await page.getByPlaceholder('Correo electrónico').press('Alt+4');
  await page.getByPlaceholder('Correo electrónico').fill('supervisorentidad_QA@yopmail.com');
  await page.getByPlaceholder('Contraseña').click();
  await page.getByPlaceholder('Contraseña').fill('Zum1235*');
  await page.getByRole('button', { name: 'Ingresar enviar informacion' }).click();
  await page.getByRole('link', { name: 'ilustracion de transicion Eventos' }).click();
  await page.getByRole('button', { name: 'Crear solicitud' }).click();
  await page.locator('select[name="Operador"]').first().selectOption('number:3564');
  await page.locator('select[name="Operador"]').nth(1).selectOption('number:76');
});