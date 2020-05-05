let helpermethods = function(){
    const until = protractor.ExpectedConditions;

    //click on an element
    this.clickElement = function(element){
        browser.wait(until.elementToBeClickable(element,5000)).then(function(){
            element.click(); 
        });
    }
    //verify element is present or not present
    this.verifyElement  = function(element,expectedstatus){
        verifyElementDisplayed(element,expectedstatus);
        /*var actualstatus  = element.isPresent();
        expect(expectedstatus).toBe(actualstatus);*/
    }
    //verify element after performing some action
    this.verifyElementafterAction  = function(element,expectedstatus){
        browser.wait(until.visibilityOf(element,5000)).then(function(){
        var actualstatus  = element.isPresent();
        expect(expectedstatus).toBe(actualstatus);
    })
    }
    //upload a file
    this.uploadfile = function(element,path){
        var path = require('path');
        absolutePath = path.resolve(__dirname, fileToUpload);
        element.sendKeys(absolutePath);
    }
    //enter text value into input
    this.EnterValue = function(element,value){
        browser.wait(until.visibilityOf(element,5000)).then(function(){
        element.sendKeys(value);
        });
    }
    //verify flyoutcontainner
    this.verifyFlyoutcontainer = function(){
        var actualstatus  = element(by.xpath("//div[contains(@class,'flyout-container')]")).isPresent();
        expect(true).toBe(actualstatus);
    }
    //verify toggled enabled or disabled
    this.verifyToggleEnabled = function(element,actualstatus) {
        expect(element.isSelected()).toBe(actualstatus);
    }
    //verify dropdown values from the UI
    this.verifydropdownValues = function(list){
        list.forEach(function(value) {
            console.log(value);
            verifyElementDisplayed(element(by.xpath("//span[@class='mat-option-text' and contains(text(),'Daily')]")),true);
        },this);     
    }
    function verifyElementDisplayed(element,expectedstatus){
        var actualstatus  = element.isPresent();
        expect(expectedstatus).toBe(actualstatus);
    }
};
module.exports = new helpermethods();