let accountPage = function(){
    var helper = require('../HelperMethods/Helper');
    let notifications_link = element(by.xpath("//h3[text()='Preferences']/parent::div//"));
    let notifications_intro_text = element(by.xpath("//div[contains(text(),'These options will determine on how user would prefer to get notifications.')]"));
    let notifications_header = element(by.xpath("//div[text()='NOTIFICATIONS']"));
    let activitysummary_subheader = element(by.xpath("//label[contains(text(),'Activity Summary Email')]"));
    let emailnotification_toggle = element(by.xpath("//label[contains(text(),'Email Notifications')]//ancestor::div[contains(@class,'col')]//input"));
    let overduestasks_toggle = element(by.xpath("//label[contains(text(),'Number of overdue tasks')]//ancestor::div[contains(@class,'col')]//input"));
    let pendingtasks_toggle = element(by.xpath("//label[contains(text(),'Number of pending tasks')]//ancestor::div[contains(@class,'col')]//input"));
    let sendasummary_dropdown = element(by.xpath("//label[contains(text(),'SEND A SUMMARY EMAIL')]/parent::div//div[@class='mat-select-value']"));
    let week_dropdown = element(by.xpath("//label[contains(text(),'DAY OF THE WEEK')]/parent::div//div[@class='mat-select-value']"));
    let timeofaday_dropdown = element(by.xpath("//label[contains(text(),'TIME OF THE DAY')]/parent::div//div[@class='mat-select-value']"));
    let close_button = element(by.xpath("//button//div[contains(text(),'Close')]"));
    let apply_button = element(by.xpath("//button//div[contains(text(),'Apply')]"));
    //verify header and intro text
    this.verifyHeaderIntroText = function(){
        helper.verifyElement(notifications_header,true);
        helper.verifyElement(notifications_intro_text,true);
    }
    //verify active summary email section
    this.verifyActiveSummaryEmailSection = function(){
        helper.verifyElement(activitysummary_subheader,true);
        VerifyLabel('Email Notifications');
        VerifyLabel('SEND A SUMMARY EMAIL');
        VerifyLabel('TIME OF THE DAY');
        VerifyLabel('Number of overdue tasks');
        VerifyLabel('Number of pending tasks');
        helper.verifyElement(sendasummary_dropdown,true);
        helper.verifyElement(timeofaday_dropdown,true);
    }
    this.verifyselecteddropdownvalue = function(label,value){
        helper.verifyselectedDDvalue(label.toUpperCase(),value);
        helper.verifydropdownIcon(label.toUpperCase());
    }

    //verify revert & apply buttons
    this.VerifyRevertApply = function(){
        VerifyButtons('Revert');
        VerifyButtons('Apply');
    }
    this.VerifyCloseButton = function(){
        helper.verifyElement(close_button,true);
    }
    
    this.clickButton = function(buttonname){
        switch(buttonname.toUpperCase()){
        case "CLOSE":
                helper.clickElement(close_button);
                break;
        case "APPLY":
                helper.clickElement(apply_button);
                break;
        
        }
    }
    this.ToggleSwitch = function(){
        helper.clickElement(element(by.xpath("//label[contains(text(),'Email Notifications')]//ancestor::div[@class='col1']//input")));
    }
    this.VerifySendSummaryMailValue = function(value){
        helper.clickElement(element(by.xpath("//label[contains(text(),'SEND A SUMMARY EMAIL')]//parent::div//span[contains(text(),'Daily')]")));
    }
    this.VerifyTimeOfDayValue = function(value){
        helper.clickElement(element(by.xpath("//label[contains(text(),'TIME OF THE DAY')]//parent::div//span[contains(text(),'Daily')]")));
    }
    this.clickSendSummaryMailValue = function(){
        helper.clickElement(element(by.xpath("//label[contains(text(),'SEND A SUMMARY EMAIL')]//parent::div//span[contains(text(),'Daily')]")));
    }
    this.clickTimeOfDayValue = function(){
        helper.clickElement(element(by.xpath("//label[contains(text(),'TIME OF THE DAY')]//parent::div//span[contains(text(),'Daily')]")));
    }
    this.verifyToggleEnabled = function(label,status){
        if(label == "email notifications")
            helper.verifyToggleEnabled(emailnotification_toggle,status);
        else if(label == "number of overdues")
            helper.verifyToggleEnabled(overduestasks_toggle,status);
        else if(label == "number of pending tasks")
            helper.verifyToggleEnabled(pendingtasks_toggle,status);
    }
    function VerifyLabel(labelname){
        helper.verifyElement(element(by.xpath("//label[contains(text(),'"+labelname+"')]")),true);   
    }
    function VerifyButtons(buttonname){
        helper.verifyElement(element(by.xpath("//button//div[contains(text(),'"+buttonname+"')]")),true);   
    }

    this.clickdrop = function(label){
        if(label == 'summary')
            helper.clickElement(sendasummary_dropdown);
        else if(label == 'week')
            helper.clickElement(week_dropdown);
        else
            helper.clickElement(timeofaday_dropdown);
       }
    //verify dropdown values
    this.verifyDropdownValues = function(label){
        const summarydropdownvalues = [ 'Daily','Weekly', 'Never'];
        const dayofweekvalues = ['Sunday','Wednesday','Saturday'];
        const timedropdownvalues = ['12:00 AM','01:00 AM','02:00 AM','09:00 AM','10:00 PM'];
        if(label == "summary")
            helper.verifydropdownValues(summarydropdownvalues);
        else if(label == "week")
            helper.verifydropdownValues(dayofweekvalues);
        else
            helper.verifydropdownValues(timedropdownvalues);
        
        $('body').sendKeys(protractor.Key.ESCAPE);
        //summarydropdownvalues.sendKeys(protractor.Key.ESCAPE);
        
    }
    this.selectddvalue = function(value,label){
        if(label == 'summary')
            helper.clickElement(sendasummary_dropdown);
        else if(label == 'time')
            helper.clickElement(timeofaday_dropdown);
        
        helper.clickElement(element(by.xpath("//span[@class='mat-option-text' and contains(text(),'"+value+"')]")));
    }
}

module.exports = new accountPage();