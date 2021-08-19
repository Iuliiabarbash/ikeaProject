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


const subject: By = By.xpath('//*[@id="inquiry_subject"]/option[5]')
const question: By = By.id('question_or_comment')
const submit: By = By.xpath('//*[@id="contact_us_request"]/div[5]/button')
// const successPage: By = By.className("static-landing-page")


//so here everytime page will be opened and closed in the end
beforeAll(async () => {
  await driver.get('https://www.ikea.com/us/en/');
});

afterAll(async () => {
    await driver.quit();
  });

  jest.setTimeout(40000)


  //my test starts here 
    test('Log in / log out via person icon', async () => {
  
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


    // await driver.wait(until.elementIsVisible(await driver.findElement(headq)));
    // await driver.findElement(headq).click();
    // await driver.sleep(1000);
    // await driver.wait(until.elementIsVisible(await driver.findElement(urname)));
    // await driver.findElement(urname).sendKeys("testName");
    // await driver.wait(until.elementIsVisible(await driver.findElement(uremail)));
    // await driver.findElement(uremail).sendKeys("test@email.com");
    // await driver.findElement(subject).click();
    // await driver.sleep(1000);
    // await driver.wait(until.elementIsVisible(await driver.findElement(question)));
    // await driver.findElement(question).sendKeys("test question");
    // await driver.findElement(submit).click();
    // expect (await ikeaPage.getSuccess());
  
   
    })

