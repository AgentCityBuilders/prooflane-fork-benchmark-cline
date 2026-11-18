export default async function ({ page, baseURL, expect }) {
  await page.goto(baseURL);
  const count = page.getByLabel('Count');
  await expect(count).toHaveText('0');
  await page.getByRole('button', { name: 'Add one' }).click();
  await expect(count).toHaveText('1');
  await page.getByRole('button', { name: 'Add one' }).click();
  await expect(count).toHaveText('2');
  await page.reload();
  await expect(count).toHaveText('0');
}
