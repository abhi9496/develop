const Automationpage= require ('../pageObjects/Automationpractise.page');
describe("open Automation page and signin",()=>{
    it("open Automation website",async()=>{
        await browser.url("http://automationpractice.com/");
        await browser.pause(3000);
    await (await Automationpage.tablogin).click();
    await browser.pause(3000);
    await (await Automationpage.tabemail).setValue("abhilash");
    await browser.pause(2000);
    await (await Automationpage.tabpasswd).setValue("reddy");
    await browser.pause(5000);
    })
})