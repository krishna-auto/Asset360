let homePage = function(){
    var helper = require('../HelperMethods/Helper');
    let account_icon = element(by.xpath("//i[contains(@class,'icon-account')]"));
    let notifications_tab_underpreference = element(by.xpath("//h3[text()='Preferences']/parent::div//a[text()='Notifications']"));
    let regionlanguage_tab_underpreference = element(by.xpath("//h3[text()='Preferences']/parent::div//a[text()='Region & Language']"));
    this.navigateToAccount = function(){
        helper.clickElement(account_icon);
    }
    this.verifytabunderpreferences = function(tab){
        if(tab==="notifications")
            helper.verifyElement(notifications_tab_underpreference,true);
        else
            helper.verifyElement(regionlanguage_tab_underpreference,true);
    }
    this.verifyelement = function(){
        helper.verifyElement(element(by.xpath(notifications_link)),true);   
    }
    this.navigateToTab = function(tab){
        switch(tab)
        {
            case "notifications":
                helper.clickElement(notifications_tab_underpreference);
                break;
            
        }
        helper.verifyFlyoutcontainer();
        
    }
    this.VerifyRevertApply = function(){
        VerifyButtons('Revert');
        VerifyButtons('Apply');
    }
    this.clickOnAccountIcon = function(){
        helper.clickElement(account_icon);
    }   
}
module.exports = new homePage();