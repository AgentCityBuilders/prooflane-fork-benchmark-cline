export default async function ({ page, baseURL, expect }) {
  await page.goto(baseURL);
  await page.getByRole('button', { name: 'Add one' }).click();
  await expect(page.getByLabel('Count')).toHaveText('1');
}
