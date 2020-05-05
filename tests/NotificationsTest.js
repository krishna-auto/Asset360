
describe('EndToEndTest',function(){
    let loginpage = require('../pages/Login');
    let homepage = require('../pages/HomePage')
    let notificationpage = require('../pages/Nofitications');
    it('LaunchBrowser',function() {
        loginpage.launchbrowser();
    },300000)
    it('NavigateToAccounts',function() {
        homepage.clickOnAccountIcon();
    },300000)
    it('VerifyNotifications',function(){
        homepage.verifytabunderpreferences('notifications');
    })
    it('navigate to notifications',function(){
        homepage.navigateToTab('notifications');
        
    })
    it('verifyemail notifications section',function(){
        //notificationpage.verifyHeaderIntroText();
        notificationpage.verifyToggleEnabled("email notifications",true);
        notificationpage.verifyActiveSummaryEmailSection();
        notificationpage.verifyToggleEnabled("number of overdues",true);
        notificationpage.verifyToggleEnabled("number of pending tasks",true);
        
    })
    it('click',function(){
        notificationpage.clickdrop();
    })
    it('verify dropdown values',function(){
        notificationpage.verifyDropdownValues();
        
    })

    
})

