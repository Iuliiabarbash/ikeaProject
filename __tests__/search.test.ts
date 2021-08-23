import { Ikea } from "./ikeaSpack"

import { Builder, Capabilities, By, ThenableWebDriver, until, } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()


//assign a class to variable
const ikeaPage = new Ikea(driver);


const cookies: By = By.id('onetrust-accept-btn-handler')
const search: By = By.name('q')
const lupa: By = By.xpath('//*[@id="search-box__searchbutton"]/svg/path')


describe("Log in/Log out", () => {

    jest.setTimeout(40000);

    beforeAll(async () => {
      await driver.get('https://www.ikea.com/us/en/');
    });
    
    afterAll(async () => {
        await driver.quit();
      });

    test('search for bed', async () => {

        await driver.sleep(2000)
        // await driver.wait(until.elementIsVisible(await driver.findElement(cookies)));
        await driver.findElement(cookies).click();
        await driver.wait(until.elementIsVisible(await driver.findElement(search)));
        await driver.findElement(search).sendKeys(`bed\n`);
        expect (await ikeaPage.getSearchResults());
        




    })
});