class loginPage{

    async launchApplication(url){
        await browser.url(url);
        await browser.maximizeWindow();
    }
}

module.exports = new loginPage();