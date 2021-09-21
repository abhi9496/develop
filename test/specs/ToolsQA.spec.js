const toolsQAPage = require('../PageObjects/toolsQA.page');
const dataTools = require('../data/ToolsQA.json')

describe('Open Tools QA and text box', ()=>{
    it.only('Open Tools QA website',async()=>{
        await browser.url(dataTools.url);
        await browser.maximizeWindow();
        await (await toolsQAPage.tabElements).waitForClickable({ timeout:60000, reverse: false, timeoutMsg: "Elements locator is not displayed", interval:5000 })
        
        // await browser.switchToFrame('.//*[@name="google_osd_static_frame"]');
        await (await toolsQAPage.tabElements).click();
        
    });

    it('Entering Data in the Text boxes',async()=>{
        await (await toolsQAPage.tabTextBox).waitForDisplayed({ timeout:60000, reverse: false, timeoutMsg: "Textbox locator is not displayed", interval:5000 })
        await (await toolsQAPage.tabTextBox).click();
        await (await toolsQAPage.setusername).setValue(dataTools.name);
        await (await toolsQAPage.setuserEmail).setValue(dataTools.email);
        await (await toolsQAPage.setcurrentAddress).setValue(dataTools.currentAddress);
        await (await toolsQAPage.setpermanentAddress).setValue(dataTools.currentAddress);
        await (await toolsQAPage.atsubmit).scrollIntoView();
        await (await toolsQAPage.atsubmit).click();
        await expect(await (await toolsQAPage.atname).getText()).toEqual('Name:'+dataTools.name);
        await expect(await (await toolsQAPage.atemail).getText()).toEqual('Email:'+dataTools.email);
        await (await toolsQAPage.setcurrentAddress).scrollIntoView();
        await expect(await (await toolsQAPage.atcurrentAddress).getText()).toEqual('Current Address :'+dataTools.currentAddress);
        await expect(await (await toolsQAPage.atpermanentAddress).getText()).toEqual('Permananet Address '+dataTools.currentAddress);
        await browser.pause(5000);

    })

    it.only("click on radio button",async()=>{
        await (await toolsQAPage.radioButton).click();
        await browser.pause(4000);
        await $("//input[@id='yesRadio']").waitForClickable({ timeout:60000, reverse: false, timeoutMsg: "Elements locator is not displayed", interval:5000 })
        await (await toolsQAPage.yesButton).click();
        //await epect(await $('.mt-3').getText()).toEqual('You have selected Impressive');
    })
})