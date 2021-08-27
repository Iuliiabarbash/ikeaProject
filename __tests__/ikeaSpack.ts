import { By, until, WebDriver } from "selenium-webdriver";


export class Ikea {
  static getSuccess(): any {
    throw new Error("Method not implemented.");
  }
    driver: WebDriver;
    url: string = "https://www.ikea.com/us/en/";    

//here is page locators like
homepage: By = By.className("js-focus-visible");
searchBar: By = By.className("search-field__input");
results: By = By.className("search-summary__heading");
sucessLogIn: By = By.xpath('//*[@id="root"]/div/div[1]/div/div[1]/div/div/h1');
DeliveryDetails: By = By.xpath('//*[@id="active-checkout-step"]/h1');

/*
homepage: By = By.xpath("//*[@class='html front not-logged-in page-indexhtml show-topics-menu ember-application']");
successP: By = By.xpath('//*[@id="content"]/div'); //("static-landing-page");

*/

constructor(driver: WebDriver) {
  this.driver = driver;
}
async navigate() {
  await this.driver.get(this.url);
  await this.driver.wait(until.elementLocated(this.homepage));
  await this.driver.wait(
    until.elementIsVisible(await this.driver.findElement(this.homepage))
  );
}
async getText(elementBy: By) {
  await this.driver.wait(until.elementLocated(elementBy));
  return (await this.driver.findElement(elementBy)).getText();
}
async sendKeys(elementBy: By, keys) {
  await this.driver.wait(until.elementLocated(elementBy));
  return this.driver.findElement(elementBy).sendKeys(keys);
}
        async getResults() {
    return this.getText(this.homepage);
  }

async getSearchResults() {
  return this.getText(this.results)
}

async getSuccess() {
  return this.getText(this.sucessLogIn);
}

async calculateDelivery() {
  return this.getText(this.DeliveryDetails);
}

async doSearch (searchItem: any) {
  let search = await this.driver.findElement(this.searchBar)
  await this.sendKeys(this.searchBar, `${searchItem}\n`)
  let myText = await this.driver.findElement(this.results).getText();
  await this.getSearchResults();
  expect(myText).toContain(`${searchItem}`);
  }
      // async takeScreenshot(filepath: string) {
    //   foto.writeFile(
    //     `${filepath}.png`,
    //     await this.driver.takeScreenshot(),
    //     "base64",
    //     (e) => {
    //       if (e) console.log(e);
    //       else console.log("screenshot saved successfully");
    //     }
    //   );
    // }
}