import{test,expect}from '@playwright/test';



test('invalidlogin @smoke',async({page})=>
{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator("#username").fill("rahulshettyacademy");
    await page.locator("[name='password']").fill("Learnin");
    await page.locator("input#signInBtn").click();
   console.log(await page.locator("[style*='block']").textContent());
   await expect(page.locator("[style*='block']")).toContainText("Incorrect username/password.");


}
)

test('validlogin @regression',async({page})=>
{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator("#username").fill("rahulshettyacademy");
    await page.locator("[name='password']").fill("Learning@830$3mK2");
    await page.locator("input#signInBtn").click();
    await expect(page).toHaveURL("https://rahulshettyacademy.com/angularpractice/shop");
   


}
)
