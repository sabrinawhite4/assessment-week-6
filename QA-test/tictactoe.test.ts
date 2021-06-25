import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();

    await driver.sleep(1500);
    
});

describe('Clicking designated square to add an X', async () => {
    test('Click upper-left sqaure to add a X', async () => {
        let upperLeft = await driver.findElement(By.id("cell-0"));

        await upperLeft.click();

        await driver.sleep(2000);
    });

    test('Click  upper-right square to add an X', async () => {
        let upperRight = await driver.findElement(By.id("cell-2"));

        await upperRight.click();

        await driver.sleep(2000);
    });
    test('Click lower-right square to add an X', async () => {
        let lowerRight = await driver.findElement(By.id("cell-8"));

        await lowerRight.click();

        await driver.sleep(1500);
    });
})
test('Checking if computer is moving after you/ve clicked', async () => {

    let lowerRight = await driver.findElement(By.id("cell-8"));

        await lowerRight.click();

    let computerMove = await driver.findElement(By.xpath('//td[text()= "o"]'));

    await driver.sleep(2000);
})