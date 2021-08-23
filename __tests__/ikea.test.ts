import { Ikea } from "./ikeaSpack"

import { Builder, Capabilities, By, ThenableWebDriver, until, } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()


//assign a class to variable
const ikeaPage = new Ikea(driver);


//our variables
const cookies: By = By.id('onetrust-accept-btn-handler')
const menue: By = By.className('hnf-btn__inner')
const myProfile: By = By.xpath('/html/body/aside/div[3]/nav[1]/ul[2]/li[1]/a')
const username: By = By.id('username') 
const password: By = By.id('password')
const enter: By = By.xpath('//*[@id="root"]/div/div[3]/div[1]/form/button[1]/span/span')
const logOut: By = By.xpath('//*[@id="root"]/div/div[1]/div/div[1]/div/div/div[3]/p/a')
const logOut2: By = By.xpath('//a[@class="btn btn--small btn--primary-inverse"]')
const personIcon: By = By.className('hnf-header__profile-link')



// const successPage: By = By.className("static-landing-page")

  


  //my test starts here 
  describe("Log in/Log out", () => {

    jest.setTimeout(40000);

    beforeAll(async () => {
      await driver.get('https://www.ikea.com/us/en/');
    });
    
    afterAll(async () => {
        await driver.quit();
      });

    test('Log in', async () => {
  
    // driver.manage().window().maximize();
    await driver.findElement(cookies).click();
    await driver.findElement(menue).click();
    await driver.wait(until.elementIsVisible(await driver.findElement(myProfile)));
    await driver.findElement(myProfile).click();

    //send the key to the form

    await driver.wait(until.elementIsVisible(await driver.findElement(username)));
    await driver.findElement(username).sendKeys("naholcte@gmail.com");
    await driver.wait(until.elementIsVisible(await driver.findElement(password)));
    await driver.findElement(password).sendKeys("Borgow@452");
    await driver.findElement(enter).click();

    expect (await ikeaPage.getSuccess());

    })
    test('Log out', async () => {
      await driver.wait(until.elementIsVisible(await driver.findElement(personIcon)));
      await driver.sleep(2000);
      await driver.findElement(personIcon).click();
      await driver.sleep(2000);
      await driver.wait(until.elementIsVisible(await driver.findElement(logOut2)));
      await driver.sleep(2000);
      await driver.findElement(logOut2).click();


      // await driver.wait(until.elementIsVisible(await driver.findElement(menue)));
      // await driver.findElement(menue).click();
      // await driver.wait(until.elementIsVisible(await driver.findElement(myProfile)));
      // await driver.findElement(myProfile).click();
      // await driver.wait(until.elementIsVisible(await driver.findElement(logOut)));
      // await driver.findElement(logOut).click();

      // expect(await ikeaPage.getResults());

    })


  })
