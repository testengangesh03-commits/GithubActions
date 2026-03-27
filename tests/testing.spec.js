import {test} from '@playwright/test';

test('testing',async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator("#username").fill("Gambo");
    // await page.locator("[type='password']").fill("Gambo@123");
    await page.fill("[type='password']","Gambo@123")
    await page.click("//span[text()=' User']");
    await page.click("#okayBtn");
   const drop= await page.locator("[data-style='btn-info']");
   await drop.selectOption("teach");
   await page.check("#terms");
   await page.click("#signInBtn");




})