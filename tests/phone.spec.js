
import{test}from '@playwright/test';
test('phonenumber',async({page})=>
{
    await page.locator('#phone').fill(9787943193);
})
