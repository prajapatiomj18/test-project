// const {test, expect} = require('@playwright/test');

// test('Login Page', async ({page}) => {

//     await page.goto('https://www.saucedemo.com/');

//     const pageURL = page.url();
//     console.log('Login page URL is: ', pageURL);

//     await expect(page).toHaveURL('https://www.saucedemo.com/');

//     const pageTitle = await page.title();
//     console.log('Login page title is: ', pageTitle);

//     await expect(page).toHaveTitle('Swag Labs');

//     await page.waitForTimeout(2000);

//     await page.locator('#user-name').fill('standard_user');

//     await page.waitForTimeout(2000);

//     await page.locator('#password').fill('secret_sauce');

//     await page.waitForTimeout(2000);

//     await page.locator('#login-button').click();

//     await page.waitForTimeout(2000);

//     const pageRedirect = page.url();
//     console.log('Current URL is: ', pageRedirect);

//     await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

//     await page.locator('#add-to-cart-sauce-labs-backpack').click();

//     await page.click('//button[@id="add-to-cart-sauce-labs-bolt-t-shirt"]');

//     // await page.waitForTimeout(2000);

//     await page.waitForSelector('//a[@class="shopping_cart_link"]');
//     // await page.locator('.shopping_cart_link').click();
//     await page.click('//a[@class="shopping_cart_link"]');

//     await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');

//     const itemCount = await page.locator('//*[@class="shopping_cart_badge"]').count();
//     console.log('Cart item count: ', itemCount);

//     await page.close();  

// })

const {test,expect} = require('@playwright/test');

test('Alert with OK', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.mouse.wheel(0, 400);  // scroll page

    // Enabling Dialog window handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
    });

    await page.click('//button[@id="alertBtn"]');
    
    await page.waitForTimeout(5000);

});

test('Confirmation Dialog - Alert with OK and cancel', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.mouse.wheel(0, 400);  // scroll page

    // Enabling Dialog window handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!');
        await dialog.accept();  // close by using OK button
        // await dialog.dismiss();  // close by using cancel button
    });

    await page.click('//button[@id="confirmBtn"]');

    await expect(page.locator('//p[@id="demo"]')).toHaveText('You pressed OK!');
    
    await page.waitForTimeout(5000);

});



test('Prompt Dialog', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.mouse.wheel(0, 400);  // scroll page

    // Enabling Dialog window handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain('Harry Potter');
        await dialog.accept('Om');  // close by using OK button with entering name in inputbox
        // await dialog.dismiss();  // close by using cancel button
    });

    await page.click('//button[@id="promptBtn"]');

    await expect(page.locator('//p[@id="demo"]')).toHaveText('Hello Om! How are you today?');
    
    await page.waitForTimeout(5000);

});