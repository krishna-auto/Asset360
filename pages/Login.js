var helper = require('../HelperMethods/Helper');
let loginpage = function(){
    const until = protractor.ExpectedConditions;

    let userName = element(by.xpath("//input[@name='username']"));
    let password = element(by.xpath("//input[@name='password']"))
    let loginButton = element(by.xpath("//input[@type='submit']"));

    this.launchbrowser = function(){
        browser.ignoreSynchronization = true;
        browser.get('https://cloud.dev.altusplatform.com/');
        browser.driver.manage().window().maximize();
        //browser.wait(until.presenceOf(userName), 80000, 'Element taking too long to appear in the DOM');
    }
    this.enterUsername  = function(){
        userName.sendKeys('santosh+admina2180919031844@argusexpresstest.com');
    }
    this.enterPassword = function(){
        password.sendKeys('Acquire123$');
    }

    this.clickLogin = function() {
        //browser.sleep(9000);
      //  loginButton.click();
        helper.clickElement(loginButton);
        browser.wait(until.visibilityOf(element(by.xpath("//button/span[contains(text(),'Add Deal')]"))), 180000, 'Element taking too long to appear in the DOM');
        
    }
}

module.exports = new loginpage();