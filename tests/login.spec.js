import{test}from '@playwright/test';



test('login',async({page})=>
{

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("#name").fill("gambo");
    await page.locator("#email").fill("gambo@123");
    

}
)
