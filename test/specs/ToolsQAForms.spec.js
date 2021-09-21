const toolsQAFormsPage = require('../PageObjects/toolsQAForms.page');
const dataToolsForms = require ('../data/ToolsQAForm.json');
const loginPage = require('../genericFuntions/login')

describe ('open toolsqa and click forms',()=>{
    it ('click on forms',async()=>{
        await loginPage.launchApplication(dataToolsForms.url);
        await (await toolsQAFormsPage.tableForms).waitForClickable({ timeout:60000, reverse:false, timeoutMsg:'Forms Locater Is Not Displayed', interval:5000});
        await (await toolsQAFormsPage.tableForms).click();
        await (await toolsQAFormsPage.tableForms).click();
        await browser.pause(3000);
        await (await toolsQAFormsPage.tablePF).click();
        await browser.pause(3000);  
    })
    it ('filling the form',async()=>{
        await (await toolsQAFormsPage.setfirstname).setValue(dataToolsForms.firstname);
        await (await toolsQAFormsPage.setlastname).setValue(dataToolsForms.lastname);
        await (await toolsQAFormsPage.setemail).setValue(dataToolsForms.email);
        // await (await toolsQAFormsPage.setradio).click();
        await (await toolsQAFormsPage.setnumber).setValue(dataToolsForms.number);
        // await (await toolsQAFormsPage.setdob).clearValue();
        // await (await toolsQAFormsPage.setdob).setValue(dataToolsForms.dob);
        await (await toolsQAFormsPage.setcontainer).scrollIntoView();
        await (await toolsQAFormsPage.setcontainer).click();
        await (await toolsQAFormsPage.setcontainer).setValue("commerce");
        // await (await toolsQAFormsPage.setsubject).click();
        // await (await toolsQAFormsPage.sethobbies).click();
        // await (await toolsQAFormsPage.setaddress).setValue(dataToolsForms.address);
        // await (await toolsQAFormsPage.setstate).click();
        // await (await toolsQAFormsPage.setplace).click();
        // await (await toolsQAFormsPage.setcity).click();
        // await (await toolsQAFormsPage.setarea).click();
        // await browser.pause(3000);
        // await (await toolsQAFormsPage.setsubmit).click();
    })
})