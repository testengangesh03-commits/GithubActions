import {test, expect} from '@playwright/test';
//task1
test('Login Page',async({page})=>{
  await page.goto('https://demoqa.com/login');
  await expect (page).toHaveTitle("demosite");
})

//task2
test('validate login',async({page})=>
{
    await page.goto('https://demoqa.com/login');
    await page.fill("#userName","Aswini");
    await page.fill("#password","Nopassword@1");
    await page.click("#login");
    await expect(page).toHaveURL("https://demoqa.com/profil")
})