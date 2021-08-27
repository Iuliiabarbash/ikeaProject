import { Ikea } from "./ikeaSpack"

import { Builder, Capabilities, By, ThenableWebDriver, until, Key, } from "selenium-webdriver"
import { fstat } from "fs";

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()


//assign a class to variable
const ikeaPage = new Ikea(driver);


const cookies: By = By.id('onetrust-accept-btn-handler')
const search: By = By.name('q')
const lupa: By = By.xpath('//*[@id="search-box__searchbutton"]/svg/path')
const actions = driver.actions();

const bed: By = By.xpath('//*[@id="search-results"]/div[1]/div[2]/a/div/div[1]/div/div[1]')
const addToCart: By = By.xpath('//span[@class="range-revamp-btn__label"]')
const contToBag: By = By.xpath('/html/body/div[13]/div/div[3]/div/div[2]/div[1]/div/a')
const checkout: By = By.xpath('(//span[@class="cart-ingka-jumbo-btn__label"])[2]')
const zip: By = By.xpath('//*[@id="zipInInput"]')
const calDelivery: By = By.xpath('//*[@id="active-checkout-step"]/form/button/span/span')
const next: By = By.xpath('//*[@id="active-checkout-step"]/div[7]/button/span/span')

const fs = require('fs');


describe("Search for item, add to cart, proceed tocheckout", () => {

    jest.setTimeout(70000);

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
        await driver.findElement(search).sendKeys(`bed`);
        await actions.sendKeys(Key.ENTER).perform();
    
        expect (await ikeaPage.getSearchResults());
        
    })

    test('add to the cart', async () => {

      await driver.sleep(1000)
      await driver.wait(until.elementIsVisible(await driver.findElement(bed)));
      await driver.findElement(bed).click();
      await driver.sleep(1000)

      await driver.wait(until.elementIsVisible(await driver.findElement(addToCart)));
      await driver.findElement(addToCart).click();
      await driver.sleep(1000)
      await driver.findElement(contToBag).click();
      await driver.sleep(2000)
      await driver.findElement(checkout).click();
      expect (await ikeaPage.calculateDelivery());

    })
    test('calculate delivery', async () => {
      await driver.sleep(3000)
      await driver.wait(until.elementIsVisible(await driver.findElement(zip)));
      await driver.findElement(zip).sendKeys('90210');
      await driver.findElement(calDelivery).click();
      await driver.sleep(1000);
      expect (await ikeaPage.calculateDelivery());
      await driver.sleep(5000);
      fs.writeFile(
          `${__dirname}/../ikeaScreenshot1.png`,
      await driver.takeScreenshot(),
          "base64",
          (e) => {
            if(e) console.error(e)
            else console.log('You saved a screenshot')
          }
        )
     
       
        
      })
  

});