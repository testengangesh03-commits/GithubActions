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
    // console.log(await page.locator("[class='card h-100']").first().textContent());
    // console.log(await page.locator("[class='card h-100']").nth(2).textContent());
    console.log(await page.locator(".card-title a").allTextContents());


}
)
test('register @sanity',async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    await page.locator(".text-reset").click();
    await page.locator("#firstName").fill("Gambo");
    await page.locator("#userEmail").fill("testengangesh03@gmail.com");
    await page.fill("#userMobile",'8778622835');
    await page.locator("[value='Male']").click();
    await page.fill("#userPassword","Gambo@125");
    await page.pause();
    await page.locator("#confirmPassword","Gambo@125");
    await page.pause();
   const dropdown= await page.locator(".custom-select");
   await dropdown.selectOption("2: Student")
   await page.locator("[type='checkbox']").check();
   await page.pause();
   await page.click("#login");
})





