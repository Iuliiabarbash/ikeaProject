import { Ikea } from "./ikeaSpack"

import { Builder, Capabilities, By, ThenableWebDriver, until, } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()


//assign a class to variable
const ikeaPage = new Ikea(driver);


//our variables
const personIcon: By = By.className('hnf-btn__inner')
const signIn: By = By.className('btn__inner')
const urname: By = By.name('Sender') 
const uremail: By = By.id('emailaddress')
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

  jest.setTimeout(25000)


  //my test starts here 
    test('Log in / log out via person icon', async () => {
      //make sure window is full
    driver.manage().window().maximize();
    await driver.findElement(personIcon).click();
    await driver.findElement(signIn).click();
    // await driver.sleep(1000);
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

